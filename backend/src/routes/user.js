import express from "express";
import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Joi from "joi";

const router = express.Router();

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

router
  //Signup handle
  .post("/signup", async (req, res) => {
    //validate user input using joi
    const { error } = signupSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, password } = req.body;

    try {
      // Check if user already exists
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      } else if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
      } // } else if (![0, 1, 2].includes(type)) {
      //   return res.status(400).json({ error: "Invalid user type" });
      // }

      // Create new user and save to database
      const hashedPass = await bcrypt.hash(password, 10);
      const user = new UserModel({
        name,
        email,
        password: hashedPass,
        type: 0,
        profilePic: "",
      });
      await user.save();
      res.json({ msg: "OK" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })
  //login handle
  .post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({ email: email }).select(
        "+password +email"
      );
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
      };

      // Exclude password and email from response
      const {
        password: userPassword,
        email: userEmail,
        ...userData
      } = user._doc;

      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "5h",
      });

      res.send({ user: userData, token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })
  //Jwt refresh handle
  .get("/verify", async (req, res) => {
    const token = req.header("auth-token");
    if (!token) {
      return res.status(401).json({ error: "Access denied" });
    }

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = await UserModel.findById(decoded.id);
      res.send(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

export default router;

import express from "express";
import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router
  //Signup handle
  .post("/signup", async (req, res) => {
    console.log(req.body);
    const { name, email, password, type, profilePic } = req.body;

    try {
      // Check if user already exists
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      } else if (!name || !email || !password || !type) {
        return res.status(400).json({ error: "All fields are required" });
      } else if (![0, 1, 2].includes(type)) {
        return res.status(400).json({ error: "Invalid user type" });
      }

      // Create new user and save to database
      const hashedPass = await bcrypt.hash(password, 10);
      const user = new UserModel({
        name,
        email,
        password: hashedPass,
        type,
        profilePic,
      });
      await user.save();
      res.send(user);
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
      const { password: userPassword, email : userEmail , ...userData } = user._doc;

      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "5h",
      });

      res.send({ user: userData , token});
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

export default router;

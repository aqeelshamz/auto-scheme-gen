import express from "express";
import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

router
  .post("/signup", async (req, res) => {
    console.log(req.body);
    const { name, email, password, type, profilePic } = req.body;

    try {
      // Check if user already exists
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Validate inputs
      if (!name || !email || !password || !type) {
        return res.status(400).json({ error: "All fields are required" });
      }

      if (![0, 1, 2].includes(type)) {
        return res.status(400).json({ error: "Invalid user type" });
      }

      // Create new user and save to database

      const hashedPass = await bcrypt.hash(password, 10);
      const user = new UserModel({ name, email, password : hashedPass, type, profilePic });
      await user.save();
      res.send(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })
  .get("/login", async (req, res) => {
    try {
      const users = await UserModel.find();
      res.send(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

export default router;

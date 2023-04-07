import express from "express";
import EventModel from "../models/eventModel.js";
const router = express.Router();


router.post("/", async (req, res) => {
    console.log(req.body);
});

export default router;



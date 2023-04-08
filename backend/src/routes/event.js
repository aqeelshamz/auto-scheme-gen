import express from "express";
import EventModel from "../models/eventModel.js";
import mongoose from "mongoose";

const router = express.Router();


// Get all events
router
  .get("/", async (req, res) => {
    try {
      const events = await EventModel.find();
      res.json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  // Get a single event by ID
  .get("/:id", async (req, res) => {
    const eventId = req.params.id;

    try {
      const event = await EventModel.findById(eventId);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  // Create a new event
  .post("/", async (req, res) => {
    const { name, startDate, endDate, color, type, members, boundary } =
      req.body;

    try {

      // Check if an event with the same name already exists
      const existingEvent = await EventModel.findOne({ name });

      if (existingEvent) {
        return res.status(400).json({ error: "An event with the same name already exists" });
      }

      const event = new EventModel({
        name,
        startDate,
        endDate,
        color,
        type,
        members,
        boundary,
      });

      await event.save();
      res.json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  // Update an existing event
  .put("/:id", async (req, res) => {
    const eventId = req.params.id;

    try {
      const event = await EventModel.findByIdAndUpdate(
        eventId,
        req.body,
        { new: true }
      );
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }

  })


  // Delete an event
  .delete("/:id", async (req, res) => {
    const eventId = req.params.id;

    try {

      if (!mongoose.isValidObjectId(eventId)) {
        return res.status(404).json({ error: "object id is not valid" });
      }

      const event = await EventModel.findByIdAndDelete(eventId);

      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }

      res.json({ message: "Event deleted" });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

export default router;

import express from "express";
import EventModel from "../models/eventModel.js";
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
  .put("/events/:id", async (req, res) => {
    const eventId = req.params.id;
    const { name, startDate, endDate, color, type, members, boundary } =
      req.body;

    try {
      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      event.name = name;
      event.startDate = startDate;
      event.endDate = endDate;
      event.color = color;
      event.type = type;
      event.members = members;
      event.boundary = boundary;

      await event.save(); //update new event data in the database
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
      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      await event.delete();
      res.json({ message: "Event deleted" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  export default router;
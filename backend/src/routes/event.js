import express from "express";
import EventModel from "../models/eventModel.js";
import mongoose from "mongoose";
import sectorRoutes from "./sector.js";
import validate from "../util/userValidate.js";
import joi from "joi";
import moment from "moment";
import sampleData from "../util/sampleData.js";

const router = express.Router();

// Use /sectors as a sub route.
router.use("/sectors", sectorRoutes);

// Get events sample
router
  .get("/sample", async (req, res) => {
    return res.json(sampleData.eventsSampleData);
  })

  // Get all events
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
    const schema = joi.object({
      name: joi.string().required(),
      startDate: joi.string().required(),
      endDate: joi.string().required(),
      color: joi.string().required(),
      type: joi.number().required().valid(1, 2, 3),
    });

    try {
      const { name, startDate, endDate, color, type } =
        await schema.validateAsync(req.body);
      console.log(moment(endDate).format("YYYY-MM-DD HH:mm:ss"));
      // Check if an event with the same name already exists
      const existingEvent = await EventModel.findOne({ name });

      if (existingEvent) {
        return res
          .status(400)
          .json({ error: "An event with the same name already exists" });
      }

      const event = new EventModel({
        name,
        startDate: moment(startDate).toISOString(),
        endDate: moment(endDate).toISOString(),
        color,
        type,
      });

      await event.save();
      res.json(event);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  .post("/update-boundary", async (req, res) => {
    const schema = joi.object({
      eventId: joi.string().required(),
      type: joi.number().required().valid(1, 2),
      data: joi.required(),
    });

    try {
      const { eventId, type, data } = await schema.validateAsync(req.body);
      const event = await EventModel.findByIdAndUpdate(eventId, {
        boundary: {
          type,
          data,
        },
      });
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }

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
      const event = await EventModel.findByIdAndUpdate(eventId, req.body, {
        new: true,
      });
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
  })


  // Update recent event
  .post('/:id/recent', async (req, res) => {
    const { id } = req.params;
    
    try {
      const event = await EventModel.findById(id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
  
      event.lastOpened = new Date();
      await event.save();
  
      return res.json({ message: 'recent event updated successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  })

  // Get all recent events
  .get('/recent', async (req, res) => {
    try {
      const events = await EventModel.find().sort({ lastOpened: -1 }).limit(5);
      return res.json(events);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  });


export default router;

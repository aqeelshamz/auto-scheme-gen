import express from "express";
import EventModel from "../models/eventModel.js";
import mongoose from "mongoose";
import sectorRoutes from "./sector.js";
import validate from "../util/userValidate.js";
import joi from "joi";
import moment from "moment";
import sampleData from "../util/sampleData.js";
import SectorModel from "../models/sectorModel.js";

const router = express.Router();

// Use /sectors as a sub route.
router.use("/sector", sectorRoutes);

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
  .get("/event/:id", async (req, res) => {
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
      members: joi.object().required(),
    });

    try {
      const { name, startDate, endDate, color, members, type } =
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
        members,
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
  .post("/:id/recent", async (req, res) => {
    const { id } = req.params;

    try {
      const event = await EventModel.findById(id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }

      event.lastOpened = new Date();
      await event.save();

      return res.json({ message: "recent event updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  })

  // Get all recent events
  .get("/recent", async (req, res) => {
    try {
      const events = await EventModel.find().sort({ lastOpened: -1 }).limit(5);
      return res.json(events);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  })

  // Create a duplicate event
  .post("/duplicate/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const event = await EventModel.findById(id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }

      const duplicatedEvent = new EventModel({
        name: event.name + " (Copy)",
        startDate: event.startDate,
        endDate: event.endDate,
        color: event.color,
        type: event.type,
        members: event.members,
        boundary: event.boundary,
      });

      await duplicatedEvent.save();

      res.json(duplicatedEvent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  .post("/members", async (req, res) => {
    const event = await EventModel.findById(req.body.eventId);
    const sectors = await SectorModel.find({ eventId: req.body.eventId }).populate("members");


    var data = {
      name: event.name,
      date: event.startDate.toDateString() + " - " + event.endDate.toDateString(),
      sectors: sectors.map((sector) => {
        return {
          sectorName: sector.name,
          members: sector.members.map((member) => {
            console.log(member);
            return member
          }),
        };
      }),
    }


    res.json(data)

    // var membersData = {
    //   SI: 0,
    //   ISH: 0,
    //   CPO: 0,
    //   .....
    // };

    // for(const member of sectors.members){

    // }

    // {
    //   eventId: "1234567890",
    //   eventName: "Thrissur Pooram",
    //   ....
    //   sectors: [
    //     {
    //       sectorId: "126781687"
    //       sectorName: "Sector A",
    //       members: {
    //         SI: 4,
    //         ISH: 10,
    //         CPO: 3
    //         ...
    //         ...
    //       }
    //     },
    //     {
    //       sectorId: "126781687"
    //       sectorName: "Sector A",
    //       members: {
    //         SI: 4,
    //         ISH: 10,
    //         CPO: 3
    //         ...
    //         ...
    //       }
    //     }
    //   ]
    // }
  })

  // Generate PDF
  .post("/members/pdf", async (req, res) => {
    //body - eventId
  })

  // Generate excel
  .post("/members/excel", async (req, res) => {
    //body - eventId
  });

export default router;

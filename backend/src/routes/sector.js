import express from "express";
import SectorModel from "../models/sectorModel.js";
import sampleData from "../util/sampleData.js";
import joi from "joi";

const router = express.Router();

// CREATE a new sector
router
  .post("/", async (req, res) => {
    const schema = joi.object({
      eventId: joi.string().required(),
      name: joi.string().required(),
      color: joi.string().required(),
      data: joi.required(),
      type: joi.number().required().valid(1, 2), // 1 = Rectangle, 2 = Polygon
    });

    try {
      const { eventId, name, color, data, type, members } = req.body;
      const sector = new SectorModel({
        name,
        color,
        type,
        members,
        data,
        eventId,
      });
      await sector.save();
      res.status(201).json(sector);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  // READ all sectors
  .get("/", async (req, res) => {
    try {
      const sectors = await SectorModel.find();
      res.json(sectors);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  // READ sectors of an event (sample)
  .post("/sample/:eventid", async (req, res) => {
    try {
      var sector = [];
      for (const s of sampleData.sectorsSampleData) {
        if (s.eventId == req.params.eventid) {
          sector.push(s);
        }
      }
      res.json(sector);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  // READ a sector by event ID
  .post("/:eventid", async (req, res) => {
    try {
      const sector = await SectorModel.find({ eventId: req.params.eventid });
      if (!sector) {
        return res.status(404).json({ error: "Sector not found" });
      }
      res.json(sector);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  // UPDATE a sector by ID
  .put("/:id", async (req, res) => {
    try {
      const sector = await SectorModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!sector) {
        return res.status(404).json({ error: "Sector not found" });
      }
      res.json(sector);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  })

  // DELETE a sector by ID
  .delete("/:id", async (req, res) => {
    try {
      const sector = await SectorModel.findByIdAndDelete(req.params.id);
      if (!sector) {
        return res.status(404).json({ error: "Sector not found" });
      }
      res.json({ message: "Sector deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

router.post("/assign-members", async (req, res) => {
  const schema = joi.object({
    sectorId: joi.string().required(),
    type: joi.number().required().valid(0, 1, 2, 3), // 0 = ISH, 1 = SI, 2 = CPO, 3 = ICPO
    coordinates: joi.object({
      lat: joi.number().required(),
      lon: joi.number().required(),
    }),
  });

  try {
    const data = await schema.validateAsync(req.body);

    const sector = await SectorModel.findOneAndUpdate(
      {
        _id: data.sectorId,
      },
      {
        $push: {
          members: {
            type: data.type,
            coordinates: data.coordinates,
          },
        },
      }
    );

    if (!sector) {
      return res.status(404).json({ error: "Sector not found" });
    }

    res.json(sector);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

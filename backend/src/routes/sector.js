import express from 'express';
import SectorModel from "../models/sectorModel.js";


const router = express.Router();

// CREATE a new sector
router.post('/', async (req, res) => {
  try {
    const sector = new SectorModel(req.body);
    await sector.save();
    res.status(201).json(sector);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// READ all sectors
.get('/', async (req, res) => {
  try {
    const sectors = await SectorModel.find();
    res.json(sectors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// READ a sector by event ID
.post('/:eventid', async (req, res) => {
  try {
    const sector = await SectorModel.find({ eventId: req.params.eventid });
    if (!sector) {
      return res.status(404).json({ error: 'Sector not found' });
    }
    res.json(sector);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// UPDATE a sector by ID
.put('/:id', async (req, res) => {
  try {
    const sector = await SectorModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!sector) {
      return res.status(404).json({ error: 'Sector not found' });
    }
    res.json(sector);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// DELETE a sector by ID
.delete('/:id', async (req, res) => {
  try {
    const sector = await SectorModel.findByIdAndDelete(req.params.id);
    if (!sector) {
      return res.status(404).json({ error: 'Sector not found' });
    }
    res.json({ message: 'Sector deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,   // ref to Event model id
    ref: 'Event',                           // ref to Event model
    required: true
  }
});

const SectorModel = mongoose.model('Sector', sectorSchema);

module.exports = SectorModel;

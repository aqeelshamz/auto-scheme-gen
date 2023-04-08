import mongoose from 'mongoose';

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
  eventID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});


const Sector = mongoose.model('Sector', sectorSchema);

export default Sector;

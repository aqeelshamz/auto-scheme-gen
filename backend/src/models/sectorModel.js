import mongoose from "mongoose";

const sectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    enum: [1, 2], // 1 = Rectangle, 2 = Polygon
    required: true,
  },
  members: [],
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId, // ref to Event model id
    ref: "Event", 
    required: true,
  },
});

const Sector = mongoose.model("Sector", sectorSchema);

export default Sector;

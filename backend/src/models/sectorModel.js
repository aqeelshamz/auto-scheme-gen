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
  members: [
    {
      type: Number, //0 - ISH, 1 - SI, 2 - CPO, 3 - ICPO
      coordinates: { type: mongoose.Schema.Types.Mixed },
    }
  ],
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId, // ref to Event model id
    ref: "Event", // ref to Event model
    required: true,
  },
});

const Sector = mongoose.model("Sector", sectorSchema);

export default Sector;

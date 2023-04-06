import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  members: {
    ISH: {
      type: Number,
      default: 0
    },
    SI: {
      type: Number,
      default: 0
    },
    CPO: {
      type: Number,
      default: 0
    },
    ICPO: {
      type: Number,
      default: 0
    }
  },
  boundary: {
    type: {
      type: Number,
      required: true
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
  },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

export default Event;

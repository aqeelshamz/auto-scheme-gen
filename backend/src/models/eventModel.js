import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
      enum: [1, 2, 3], // 1 = VIP, 2 = Private, 3 = Public
    },
    members: {
      ISH: {
        type: Number,
        default: 0,
      },
      SI: {
        type: Number,
        default: 0,
      },
      CPO: {
        type: Number,
        default: 0,
      },
      ICPO: {
        type: Number,
        default: 0,
      },
    },
    boundary: {
      type: {
        type: Number,
        enum: [1, 2], // 1 = Rectangle, 2 = Polygon
      },
      data: {
        type: mongoose.Schema.Types.Mixed,
      },
    },
    lastOpened: {
      type: Date,
      default: Date.now,
      required: false,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      select: false
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
      enum: [0, 1, 2], // admin - 0, office - 1, viewer - 2
    },
    profilePic: {
      type: String,
      default: null
    }
  }, { timestamps: true });
  
  const User = mongoose.model('User', userSchema);
  
  export default User;

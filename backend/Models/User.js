import mongoose from "mongoose";
const Schema = mongoose.Schema;
let userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
    unique: true,
  },

  Address: {
    type: String,
    required: true,
    unique: true,
  },
  pic: {
    type: String,
    required: true,
  },
  googleSign: {
    type: String,
    required: true,
  },
  verified: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current date and time
  },
  wishList: [
    {
      type: String,
      required: true,
    },
  ],
  orderFood: [
    {
      type: String,
      required: true,
    },
  ],
});

export default mongoose.model("User", userSchema);

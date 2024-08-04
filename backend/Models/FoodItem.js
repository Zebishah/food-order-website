import mongoose from "mongoose";
const Schema = mongoose.Schema;
let FoodItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pic: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },

  discount: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  available: {
    type: Date,
    default: Date.now, // Automatically set to current date and time
  },
  bookings: [
    {
      type: String,
      required: true,
    },
  ],
  bookers: [
    {
      type: String,
      required: true,
    },
  ],
  bookingDates: [
    {
      type: String,
      required: true,
    },
  ],
});

export default mongoose.model("FoodItem", FoodItemSchema);

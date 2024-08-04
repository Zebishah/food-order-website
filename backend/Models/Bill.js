import mongoose from "mongoose";
const Schema = mongoose.Schema;
let BookedDishSchema = new Schema({
  items: [
    {
      type: String,
      required: true,
    },
  ],
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  totalDiscount: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("BookedDish", BookedDishSchema);

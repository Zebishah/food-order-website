import mongoose from "mongoose";
const Schema = mongoose.Schema;
let BookingDishSchema = new Schema({
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
  instruction: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
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

export default mongoose.model("BookingDish", BookingDishSchema);

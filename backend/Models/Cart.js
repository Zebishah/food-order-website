import mongoose from "mongoose";
const Schema = mongoose.Schema;
let CartSchema = new Schema({
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

export default mongoose.model("Cart", CartSchema);

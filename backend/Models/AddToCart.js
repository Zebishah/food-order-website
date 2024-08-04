import mongoose from "mongoose";
const Schema = mongoose.Schema;
let CartAddSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  pic: {
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

  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("AddToCart", CartAddSchema);

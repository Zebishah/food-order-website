import mongoose from "mongoose";
const Schema = mongoose.Schema;
let FavoriteSchema = new Schema({
  name: {
    type: String,
    required: true,
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
    unique: true,
  },

  price: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },

  available: {
    type: Date,
    default: Date.now, // Automatically set to current date and time
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current date and time
  },
});

export default mongoose.model("Favorite", FavoriteSchema);

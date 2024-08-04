import mongoose from "mongoose";
const Schema = mongoose.Schema;
let CategorySchema = new Schema({
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
  items: [
    {
      type: String,
      required: true,
    },
  ],
  itemsCount: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Category", CategorySchema);

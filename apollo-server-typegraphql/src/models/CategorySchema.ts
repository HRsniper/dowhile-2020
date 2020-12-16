import mongoose from "mongoose";

const schema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const CategorySchema = mongoose.model("Categories", schema);

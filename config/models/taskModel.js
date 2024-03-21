import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  data: String,
});

const counterSchema = new mongoose.Schema({
  addCount: {
    type: Number,
    default: 0,
  },
  updateCount: {
    type: Number,
    default: 0,
  },
});

export const Data = mongoose.model("Data", dataSchema);

export const Counter = mongoose.model("Counter", counterSchema);

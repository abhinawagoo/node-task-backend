import mongoose from "mongoose";

import db from "./db.js";

const connectToDatabase = (req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    db.once("open", () => {
      console.log("Connected to MongoDB");
      next();
    });
  }
};

export default connectToDatabase;

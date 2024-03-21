import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
mongoose.connect(process.env.MONGO_URI.toString()).then(() => {
  console.log("db connection establised");
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;

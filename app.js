import dotenv from "dotenv";
// import logger from "../utils/logger.js";
dotenv.config({ path: ".env" });
import taskRoutes from "./routes/task.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectToDatabase from "./config/dbConfig.js";
//express app
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000", "https://react-task-flax.vercel.app"],
  credentials: true,
};
//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/api", connectToDatabase, taskRoutes);

// app.js

// app.use(bodyParser.json());
// // app.use(connectToDatabase);
// app.use("/api", routes);

export default app;

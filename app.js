import dotenv from "dotenv";
// import logger from "../utils/logger.js";
dotenv.config({ path: ".env" });
import taskRoutes from "./routes/task.js";
import express from "express";
import bodyParser from "body-parser";

import connectToDatabase from "./config/dbConfig.js";
//express app
const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", connectToDatabase, taskRoutes);

// app.js

// app.use(bodyParser.json());
// // app.use(connectToDatabase);
// app.use("/api", routes);

export default app;

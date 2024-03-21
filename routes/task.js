import express from "express";
import {
  addTask,
  updateTask,
  getCounterData,
  getAllTask,
} from "../controllers/taskController.js";
const router = express.Router();

// import Data from "../config/models/Data";

// API endpoints
router.post("/add", addTask);
router.put("/update/:id", updateTask);
router.get("/count", getCounterData);
router.get("/get-all-tasks", getAllTask);

export default router;

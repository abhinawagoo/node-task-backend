import express from "express";
import {
  addTask,
  updateTask,
  getCounterData,
  getAllTask,
} from "../controllers/taskController.js";

const router = express.Router();

// Define API endpoints and their corresponding controller functions

// Endpoint to add a new task
router.post("/add", addTask);

// Endpoint to update an existing task by ID
router.put("/update/:id", updateTask);

// Endpoint to get counter data (update and add counts)
router.get("/count", getCounterData);

// Endpoint to get all tasks
router.get("/get-all-tasks", getAllTask);

export default router;

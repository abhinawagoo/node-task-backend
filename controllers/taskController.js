import { Counter, Data } from "../config/models/taskModel.js";

// Get all tasks from the database
export const getAllTask = async (req, res) => {
  try {
    const tasks = await Data.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send("Error fetching tasks");
  }
};

// Add a new task to the database
export const addTask = async (req, res) => {
  try {
    // Increment add count
    await Counter.findOneAndUpdate(
      {},
      { $inc: { addCount: 1 } },
      { upsert: true }
    );

    // Add new data
    const newData = req.body.data;
    const data = new Data({ data: newData });
    await data.save();

    res.status(200).json({ _id: data._id, data: data.data });
  } catch (error) {
    res.status(500).send("Error adding data");
  }
};

// Update an existing task in the database
export const updateTask = async (req, res) => {
  try {
    // Increment update count
    await Counter.findOneAndUpdate(
      {},
      { $inc: { updateCount: 1 } },
      { upsert: true }
    );

    const id = req.params.id;
    const newData = req.body.data;

    // Update data by ID
    await Data.findByIdAndUpdate(id, { data: newData });

    res.status(200).send("Data updated successfully");
  } catch (error) {
    res.status(500).send("Error updating data");
  }
};

// Get counter data (update and add counts) from the database
export const getCounterData = async (req, res) => {
  try {
    const counters = await Counter.findOne({});
    res.status(200).json(counters);
  } catch (error) {
    res.status(500).send("Error fetching counts");
  }
};

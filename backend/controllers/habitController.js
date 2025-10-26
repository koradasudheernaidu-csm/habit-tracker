import Habit from "../models/habitModel.js";

// Get all habits
export const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch habits", error: error.message });
  }
};

// Create a new habit
export const createHabit = async (req, res) => {
  try {
    const { name, frequency } = req.body;
    const habit = new Habit({ name, frequency });
    const savedHabit = await habit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    res.status(400).json({ message: "Failed to create habit", error: error.message });
  }
};

// Update habit progress
export const updateHabit = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHabit = await Habit.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedHabit);
  } catch (error) {
    res.status(400).json({ message: "Failed to update habit", error: error.message });
  }
};

// Delete a habit
export const deleteHabit = async (req, res) => {
  try {
    const { id } = req.params;
    await Habit.findByIdAndDelete(id);
    res.status(200).json({ message: "Habit deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete habit", error: error.message });
  }
};

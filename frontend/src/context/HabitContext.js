import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    try {
      const res = await axios.get("/api/habits");
      setHabits(res.data);
    } catch (error) {
      console.error("Failed to fetch habits:", error);
    }
  };

  const addHabit = async (habit) => {
    try {
      const res = await axios.post("/api/habits", habit);
      setHabits([...habits, res.data]);
    } catch (error) {
      console.error("Failed to add habit:", error);
    }
  };

  const completeHabit = async (id) => {
    const habit = habits.find((h) => h._id === id);
    if (!habit) return;
    const updatedHabit = { ...habit, streak: habit.streak + 1, lastCompleted: new Date() };
    try {
      await axios.put(`/api/habits/${id}`, updatedHabit);
      setHabits(habits.map((h) => (h._id === id ? updatedHabit : h)));
    } catch (error) {
      console.error("Failed to update habit:", error);
    }
  };

  const deleteHabit = async (id) => {
    try {
      await axios.delete(`/api/habits/${id}`);
      setHabits(habits.filter((h) => h._id !== id));
    } catch (error) {
      console.error("Failed to delete habit:", error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <HabitContext.Provider
      value={{ habits, addHabit, completeHabit, deleteHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};

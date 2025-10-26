import React, { useState, useContext } from "react";
import { HabitContext } from "../context/HabitContext";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const { addHabit } = useContext(HabitContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    addHabit({ name, frequency });
    setName("");
    setFrequency("daily");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default AddHabitForm;

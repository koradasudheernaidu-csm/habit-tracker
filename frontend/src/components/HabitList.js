import React, { useContext } from "react";
import HabitCard from "./HabitCard";
import { HabitContext } from "../context/HabitContext";

const HabitList = () => {
  const { habits, completeHabit, deleteHabit } = useContext(HabitContext);

  if (habits.length === 0) return <p>No habits added yet.</p>;

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitCard
          key={habit._id}
          habit={habit}
          onComplete={completeHabit}
          onDelete={deleteHabit}
        />
      ))}
    </div>
  );
};

export default HabitList;

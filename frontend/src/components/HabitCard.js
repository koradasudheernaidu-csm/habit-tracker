import React from "react";

const HabitCard = ({ habit, onComplete, onDelete }) => {
  const { name, frequency, streak } = habit;

  return (
    <div className="habit-card">
      <h3>{name}</h3>
      <p>Frequency: {frequency}</p>
      <p>Streak: {streak}</p>
      <button onClick={() => onComplete(habit._id)}>Complete</button>
      <button onClick={() => onDelete(habit._id)}>Delete</button>
    </div>
  );
};

export default HabitCard;

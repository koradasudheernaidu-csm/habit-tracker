import React, { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = () => {
  const { habits } = useContext(HabitContext);

  const data = {
    labels: habits.map((habit) => habit.name),
    datasets: [
      {
        label: "Streak",
        data: habits.map((habit) => habit.streak),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#e0e0e0"
        }
      },
      title: {
        display: true,
        text: "Habit Streaks",
        color: "#e0e0e0"
      }
    },
    scales: {
      x: {
        grid: {
          color: "#404040"
        },
        ticks: {
          color: "#e0e0e0"
        }
      },
      y: {
        grid: {
          color: "#404040"
        },
        ticks: {
          color: "#e0e0e0"
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default ProgressChart;

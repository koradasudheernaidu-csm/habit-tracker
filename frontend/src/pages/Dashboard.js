import React from "react";
import Navbar from "../components/Navbar";
import AddHabitForm from "../components/AddHabitForm";
import HabitList from "../components/HabitList";
import ProgressChart from "../components/ProgressChart";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AddHabitForm />
        <HabitList />
        <ProgressChart />
      </main>
    </div>
  );
};

export default Dashboard;

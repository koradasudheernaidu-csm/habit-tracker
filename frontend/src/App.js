import React from "react";
import { HabitProvider } from "./context/HabitContext";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <HabitProvider>
      <Dashboard />
    </HabitProvider>
  );
};

export default App;

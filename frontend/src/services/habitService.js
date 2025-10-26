import axios from "axios";

const API_URL = "/api/habits";

export const getHabits = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createHabit = async (habit) => {
  const res = await axios.post(API_URL, habit);
  return res.data;
};

export const updateHabit = async (id, updatedHabit) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedHabit);
  return res.data;
};

export const deleteHabit = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

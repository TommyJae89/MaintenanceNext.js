// src/utils/taskUtils.js

import axios from 'axios';

// Utility functions for task management
export const fetchTasks = async () => {
  try {
    const response = await axios.get('/api/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post('/api/tasks', task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await axios.put(`/api/tasks/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`/api/tasks/${taskId}`);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

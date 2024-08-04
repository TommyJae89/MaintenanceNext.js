import React from 'react';

const TaskList = ({ tasks, refreshTasks, toggleComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}>
          <div className="task-details">
            <h3>{task.description}</h3>
            <p>Status: {task.status}</p>
          </div>
          <button className="delete-btn" onClick={() => {/* Delete logic */}}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

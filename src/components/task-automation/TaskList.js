import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

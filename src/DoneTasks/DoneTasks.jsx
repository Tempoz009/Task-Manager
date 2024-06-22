import React from 'react';
import './DoneTasks.css';

function DoneTasks({ tasks }) {
  return (
    <div className='task-container'>
      {tasks.length > 0 ? tasks.map((task) => (
        <div key={task.id} className='task'>
          <img className='task-img' src={task.image} alt="task image" />
          <p>{task.title}</p>
          <p>{task.description}</p>
        </div>
      )) : <p className="no-tasks-message">No done tasks available</p>}
    </div>
  );
}

export default DoneTasks;

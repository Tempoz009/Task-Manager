import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import taskIcon from '../assets/task-icon.png'; // Assuming a default icon for tasks

function AddTask({ setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now(), title, description, image: taskIcon }
    ]);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Title" 
        required 
        className="task-input"
      />
      <textarea 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
        placeholder="Description" 
        required 
        className="task-input"
      />
      <button type="submit" className="task-button">Add Task</button>
    </form>
  );
}

export default AddTask;

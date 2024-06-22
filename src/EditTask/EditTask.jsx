import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditTask.css';

function EditTask({ tasks, setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === parseInt(id));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSave = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === parseInt(id) ? { ...t, title, description } : t
    );
    setTasks(updatedTasks);
    navigate('/');
  };

  return (
    <div className="task-form">
      <h2>Edit Task</h2>
      <input
        className="task-input"
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <textarea
        className="task-input"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Description"
      />
      <button className="task-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default EditTask;

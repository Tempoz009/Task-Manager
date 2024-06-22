import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Task from './Task/Task';
import DoneTasks from './DoneTasks/DoneTasks';
import AddTask from './Task/AddTask';
import EditTask from './EditTask/EditTask';
import Weather from './Weather/Weather';
import Report from './Report/Report';
import { TASKS } from './tasks';
import './App.css';

// Импорт стилей
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [doneTasks, setDoneTasks] = useState([]);

  const moveToDoneList = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setDoneTasks([...doneTasks, tasks.find(task => task.id === taskId)]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Task Manager</h1>
        <Weather city="Minsk" /> {/* Передайте название города для отображения погоды */}
        <Nav className="nav-links">
          <Nav.Link as={Link} to="/">Tasks</Nav.Link>
          <Nav.Link as={Link} to="/done">Done Tasks</Nav.Link>
          <Nav.Link as={Link} to="/add">Add Task</Nav.Link>
          <Nav.Link as={Link} to="/report">Report</Nav.Link>
        </Nav>
        <Routes>
          <Route path="/" element={
            <div className='task-container'>
              {tasks.length > 0 ? tasks.map((task) => (
                <Task
                  key={task.id}
                  {...task}
                  moveToDoneList={() => moveToDoneList(task.id)}
                />
              )) : <p className="no-tasks-message">No tasks available</p>}
            </div>
          } />
          <Route path="/done" element={<DoneTasks tasks={doneTasks} />} />
          <Route path="/add" element={<AddTask setTasks={setTasks} />} />
          <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

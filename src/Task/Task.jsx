import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Task.css';

function Task(props) {
  const { id, title, description, image, moveToDoneList } = props;

  const [likesCount, setLikesCount] = useState(0);

  const increaseLikesByOne = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <div className='task'>
      <img className='task-img' src={image} alt="task image" />
      <p>{title}</p>
      <p>{description}</p>
      <div className='task-footer'>
        <p>Likes: {likesCount}</p>
        <button className='like-button' onClick={increaseLikesByOne}>Like</button>
      </div>
      <button className="done-button" onClick={moveToDoneList}>Done</button>
      <Link to={`/edit/${id}`} className="edit-button">Edit</Link>
    </div>
  );
}

export default Task;

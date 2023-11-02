import React from "react";
import "./card.scss";
import todoImage from '../../assets/logos/task.svg'

const Card = ({ task }) => {
  return (
    <div className="card">
      <div className="header">
        <div className="taskID">{task.id}</div>
        <div className="profile">Profile</div>
      </div>

      <div className="title-row">
        <div className="status">{task.status}</div>
        <div className="title">{task.title}</div>
      </div>

      <div className="tag-row">
        <img className="priority" src={todoImage} alt={task.priority}/>
        <div className="tags">
            {task.tag.map((singleTag, index) => (
            <div className="tag">{task.tag}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

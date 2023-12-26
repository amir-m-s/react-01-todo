import React from "react";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";

const Task = props => {
  return (
    <div className={`task ${props.task.reminder ? "reminder" : ""}`}>
      <div onDoubleClick={() => props.onToggle(props.task.id)}>
        <h3>{props.task.text}</h3>
        <p>{props.task.day}</p>
      </div>
      <Button
        value={<FaTimes />}
        classes="btn btn-error"
        onClickHandler={() => props.onDelete(props.task.id)}
      />
    </div>
  );
};

export default Task;

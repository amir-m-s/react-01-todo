import React, { useState } from "react";
import Task from "./Task";

const Tasks = props => {
  return (
    <>
      {props.tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={props.onDelete}
            onToggle={props.onToggle}
          />
        );
      })}
    </>
  );
};

export default Tasks;

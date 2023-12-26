import React from "react";
import { useState } from "react";

const AddTask = props => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  // Submit handler
  function onSubmit(e) {
    e.preventDefault();

    if (!text) {
      alert("Please add task");
      return;
    }

    props.onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  }

  return (
    <form
      className={`add-form ${props.visible ? "show-form" : ""}`}
      onSubmit={onSubmit}
    >
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-reminder">
        <label htmlFor="reminder-checkbox">Set Reminder</label>
        <input
          type="checkbox"
          id="reminder-checkbox"
          checked={reminder}
          value={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="save" className="btn" />
    </form>
  );
};

export default AddTask;

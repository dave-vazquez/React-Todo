// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";

const TodoForm = props => {
	const { changeHandler, addTaskHandler, task } = props;
  return (
    <form className="task-form" name="taskForm">
      <input
        className="task-input"
        type="text"
        value={task}
        placeholder="Add Task"
        name="task"
        onChange={changeHandler}
      />
      <button className="submit-task-button" onClick={addTaskHandler}>+</button>
    </form>
  );
};

export default TodoForm;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TweenMax from 'gsap';
import "./Todo.css";

const TodoForm = props => {
  const { changeHandler, addTaskHandler, task } = props;

  const onClickHandler = event => {
    event.preventDefault();
    if (addTaskHandler()) {
      let submitButton = event.target;

      TweenMax.fromTo(
        submitButton,
        0.05,
        { x: "-5" },
        {
          x: "5",
          yoyo: true,
          repeat: 3,
          onComplete: () => {
            TweenMax.to(submitButton, 0.01, { x: "0" });
          }
        }
      );

      TweenMax.fromTo(
        submitButton,
        0.06,
        { background: "#2C8DA6" },
        { background: "#d43232", yoyo: true, repeat: 3 }
      );
    }
  };

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
      <button className="submit-task-button" onClick={onClickHandler}>
        +
      </button>
    </form>
  );
};

export default TodoForm;

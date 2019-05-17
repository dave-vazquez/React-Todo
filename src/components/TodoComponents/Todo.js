// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";

const Todo = props => {
  const { todo, toggleCompleted } = props;
  return (
    <div 
      className={`todo${todo.completed ? " completed" : ""}`}
      onClick={() => toggleCompleted(todo.id)}
    >
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;

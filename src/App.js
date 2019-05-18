import React from "react";
import "./App.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import ClearButton from "./components/TodoComponents/ClearButton";
import { TweenLite, Elastic, Power2 } from "gsap";

const todos = [];

const defaultState = {
  todos: todos, // TodoList --> Todo
  task: "", // Todo Form
  id: undefined, // Todo Form
  completed: false // Todo Form
};

class App extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  toggleCompleted = todoID => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = () => {
    let todoList = document.querySelector('.todo-list');
    let remainingTodos = this.state.todos.filter(todo => !todo.completed);
    let numCleared = this.state.todos.length - remainingTodos.length;

    if (this.state.todos.length !== remainingTodos.length) {
      this.setState({
        todos: remainingTodos
      });

      TweenLite.to(todoList, .25, {ease: Power2.easeOut, height: `-=${51 * numCleared}px`});
      
      return false;
    }
    return true;
  };

  changeHandler = event => {
    this.setState({ task: event.target.value });
  };

  addTaskHandler = () => {
    let todoList = document.querySelector('.todo-list');
    
    if (this.state.task !== "") {
      let newTask = {
        task: this.state.task,
        id: Date.now(),
        completed: false
      };

      TweenLite.to(todoList, .25, {ease: Power2.easeOut, height: "+=51px", onComplete: () => {
        this.setState({
          todos: [...this.state.todos, newTask],
          task: "",
          id: undefined,
          complete: false
        });
      }});
      
      return false;
    }

    return true;
  };

  componentDidMount = () => {
    let formContainer = document.querySelector(".form-container");
    let clearButtonContainer = document.querySelector(
      ".clear-button-container"
    );

    TweenLite.fromTo(
      formContainer,
      1,
      { opacity: "0"},
      { ease: Power2.easeOut ,opacity: "1", delay: "1" }
    );
    TweenLite.fromTo(
      formContainer,
      1,
      { x: "-1000"},
      { ease: Elastic.easeOut.config(1, 0.3), x: "0", delay: "1" }
    );
    TweenLite.fromTo(
      clearButtonContainer,
      1,
      { opacity: "0" },
      { ease: Power2.easeOut, opacity: "1", delay: "1" }
    );
    TweenLite.fromTo(
      clearButtonContainer,
      1,
      { x: "1000" },
      { ease: Elastic.easeOut.config(1, 0.3), x: "0", delay: "1" }
    );
  };

  render() {
    return (
      <div className="app-container">
        <div className="form-container">
          <h1 className="form-header">To Do List</h1>
          <TodoForm
            changeHandler={this.changeHandler}
            addTaskHandler={this.addTaskHandler}
            task={this.state.task}
          />
        </div>

        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <div className="clear-button-container">
          <ClearButton clearCompleted={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import ClearButton from "./components/TodoComponents/ClearButton";

const todos = [
  {
    task: "Mark this task complete",
    id: Date.now(),
    completed: false
  }
];

const defaultState = {
  todos: todos,         // TodoList --> Todo
  task: "",             // Todo Form
  id: undefined,        // Todo Form
  completed: false      // Todo Form
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = defaultState;
  }

  toggleCompleted = todoID => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
          return todo;
      })
    });
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  changeHandler = event => {
    this.setState({task: event.target.value})
  }

  addTaskHandler = event => {
    event.preventDefault();

    let newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTask],
      task: "",
      id: undefined,
      complete: false
    });
  }

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
          <ClearButton clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;

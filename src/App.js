import React from "react";
import "./App.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import ClearButton from "./components/TodoComponents/ClearButton";

const todos = [
  {
    task: "Organize Life",
    id: 248,
    completed: false
  },
  {
    task: "Fix Everything",
    id: 145,
    completed: false
  }
];

const defaultState = {
  todos: todos,         // TodoList --> Todo
  task: "",             // Todo Form
  id: undefined,        // Todo Form
  completed: false      // Todo Gorm
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
        <TodoList 
          todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted}  
          />
        <TodoForm 
          changeHandler={this.changeHandler}
          addTaskHandler={this.addTaskHandler}
      
          task={this.state.task}
        />
        <ClearButton clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;

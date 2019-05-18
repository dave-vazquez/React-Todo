// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";
import { TweenLite, Elastic, Power2 } from "gsap";

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref);
    TweenLite.fromTo(this.ref.current, .5, { x: "-1000"}, {ease: Elastic.easeOut.config(.5, 0.3), x: "0"});
  }

  render() {
    return (
      <div 
        className={`todo${this.props.todo.completed ? " completed" : ""}`}
        onClick={() => this.props.toggleCompleted(this.props.todo.id)}
        ref={this.ref}
      >
        <p>{this.props.todo.task}</p>
      </div>
    );
  } 
};

export default Todo;

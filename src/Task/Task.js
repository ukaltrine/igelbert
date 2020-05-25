import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  deleteTask() {
    this.props.deleteTask(this.props.id);
  }
  updateTask() {
    this.props.updateTask(this.props.id);
  }

  render() {
    const { taskTitle, id } = this.props;

    return (
      <div className="task m-1">
        <p id={id}>{taskTitle}</p>

        <div className="buttons">
          <button onClick={this.updateTask} className="btn btn-outline-warning">
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button onClick={this.deleteTask} className="btn btn-outline-warning">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Task;

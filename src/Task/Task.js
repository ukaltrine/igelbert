import React, { Component } from "react";

import "./Task.css";
class Task extends Component {
  static defaultProps = {
    task: "",
  };
  render() {
    const { task } = this.props;
    return (
      <div className="task m-1">
        <p>{task}</p>
        <button className="btn btn-outline-secondary">
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button className="btn btn-outline-secondary">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}
export default Task;

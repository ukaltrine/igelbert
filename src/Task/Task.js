import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      taskTitle: this.props.taskTitle,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.updatingTask = this.updatingTask.bind(this);
  }

  deleteTask() {
    this.props.deleteTask(this.props.id);
  }

  updatingTask(updatedTitle) {
    this.setState({
      updating: true,
      updatingTask: updatedTitle,
    });
  }

  updateTask() {
    this.props.updateTask(this.state.taskTitle, this.props.id);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.taskTitle !== "") {
      this.props.updateTask(this.state.taskTitle, this.props.id);
    }
    this.setState({
      updating: false,
    });
  }

  render() {
    const { taskTitle, id } = this.props;

    return (
      <div>
        {!this.state.updating ? (
          <div className="task m-1">
            <p id={id}>{taskTitle}</p>
            <div className="buttons">
              <button
                onClick={this.updatingTask}
                className="btn btn-outline-warning"
              >
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button
                onClick={this.deleteTask}
                className="btn btn-outline-warning"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ) : (
          <form className="TaskForm m-1" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                value={this.state.taskTitle}
                onChange={this.handleChange}
                name="taskTitle"
              />
              <div className="input-group-append">
                <button className="btn btn-warning">
                  <i className="fas fa-save"> Update Task</i>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Task;

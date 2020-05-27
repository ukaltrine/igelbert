import React, { Component } from "react";
import "./TaskForm.css";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.taskTitle !== "") {
      this.props.addTask(this.state.taskTitle);
      this.setState({ taskTitle: "" });
    }
  }

  render() {
    return (
      <form className="TaskForm m-1" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Add new task..."
            value={this.state.taskTitle}
            onChange={this.handleChange}
            name="taskTitle"
          />
          <div className="input-group-append">
            <button className="btn btn-warning">
              <i className="fas fa-save"> Add Task</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default TaskForm;

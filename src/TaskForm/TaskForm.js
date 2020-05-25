import React, { Component } from "react";
import "./TaskForm.css";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
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
    if (this.state.task !== "") {
      this.props.addTask(this.state.task);
      this.setState({ task: "" });
    }
  }

  render() {
    return (
      <form className="TaskForm m-1" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Add new task..."
            value={this.state.task}
            onChange={this.handleChange}
            name="task"
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

import React, { Component } from "react";
import "./TaskListForm.css";
class TaskListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskListTitle: "",
      tasks: [],
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
    if (this.state.taskListTitle !== "") {
      this.props.addTaskList(this.state);
      this.setState({ taskListTitle: "" });
    }
  }

  render() {
    return (
      <form className="TaskListForm  m-3 p-3" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Add new list..."
            value={this.state.taskListTitle}
            onChange={this.handleChange}
            name="taskListTitle"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-warning">
              <i className="fas fa-save"> Add List</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default TaskListForm;

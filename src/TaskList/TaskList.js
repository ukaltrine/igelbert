import React, { Component } from "react";
import "./TaskList.css";
import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  render() {
    return (
      <div className="taskList p-3 m-3">
        <p>List Title: {this.props.tasksList.taskTitle}</p>
        <TaskForm addTask={this.addTask} />
        {this.state.tasks.map((task, index) => {
          return <Task key={index} task={task} />;
        })}
      </div>
    );
  }
}

export default TaskList;

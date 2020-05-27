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
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }
  deleteTask(id) {
    const newTasks = this.state.tasks.filter((task, index) => {
      console.log(task, index);
      return index !== id;
    });

    console.log(newTasks);
    this.setState({
      tasks: newTasks,
    });
  }

  updateTask(value, id) {
    const updatedTasks = this.state.tasks.map((taskTitle, index) => {
      if (index === id) {
        taskTitle = value;
      }
      return taskTitle;
    });
    console.log(updatedTasks);
    this.setState({
      tasks: updatedTasks,
    });
  }
  render() {
    return (
      <div className="taskList p-3 m-3">
        <p>
          List Title: <strong>{this.props.List.taskListTitle}</strong>
        </p>
        <TaskForm addTask={this.addTask} />
        {this.state.tasks.map((task, index) => {
          return (
            <Task
              key={index}
              taskTitle={task}
              id={index}
              deleteTask={this.deleteTask}
              updateTask={this.updateTask}
            />
          );
        })}
      </div>
    );
  }
}

export default TaskList;

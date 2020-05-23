import React, { Component } from "react";
import "./App.css";
import TaskList from "./TaskList/TaskList";
import TaskListForm from "./TaskListForm/TaskListForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
    this.addTasks = this.addTasks.bind(this);
    this.addTaskList = this.addTaskList.bind(this);
  }

  addTasks(tasks) {
    this.setState({
      taskList: [...this.state.taskList, tasks],
    });
  }
  addTaskList(tasks) {
    this.setState({
      taskList: [...this.state.taskList, tasks],
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <TaskListForm className="taskform" addTaskList={this.addTaskList} />
        </div>
        <div className="App-header">
          {this.state.taskList.map((tasksList, index) => {
            return (
              <TaskList
                key={index}
                addTasks={this.addTasks}
                tasksList={tasksList}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

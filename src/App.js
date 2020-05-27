import React, { Component } from "react";
import "./App.css";
import TaskList from "./TaskList/TaskList";
import TaskListForm from "./TaskListForm/TaskListForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
    };
    this.addTaskList = this.addTaskList.bind(this);
  }

  addTaskList(newList) {
    this.setState({
      List: [...this.state.List, newList],
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <TaskListForm className="taskform" addTaskList={this.addTaskList} />
        </div>
        <div className="App-header">
          {this.state.List.map((taskList, index) => {
            return (
              <TaskList key={index} addTasks={this.addTasks} List={taskList} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

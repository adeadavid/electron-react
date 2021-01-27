import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// How to import the renderer in react
const { ipcRenderer } = window.require("electron");

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.count}
          </a>
          <button onClick={this.increaseCount}>Add</button>
          <button onClick={this.handleNotification}>test ipc</button>
        </header>
      </div>
    );
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleNotification = () => {
    ipcRenderer.send("showNotification");
  };
}

export default App;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from "./app.css";
import GameCell from "./components/gameCell";
import DisplayText from "./components/displayText";
import Grid from "./components/grid";
import StartGame from "./components/startGame";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showGrid: false,
      text: "Start Game!",
      mode: ""
    };
  }

  handleOnePlayer = () => {
    this.setState({ mode: "single", showGrid: true });
  };
  handleTwoPlayer = () => {
    this.setState({ mode: "multi", showGrid: true });
  };
  handleReset = () => {
    this.setState({ showGrid: false });
  };
  render() {
    return (
      <div className="main-grid">
        <button className="btn-mainMenu" onClick={this.handleReset}>
          Menu
        </button>
        {this.state.showGrid
          ? <Grid mode={this.state.mode} />
          : <StartGame
              handleOnePlayer={this.handleOnePlayer}
              handleTwoPlayer={this.handleTwoPlayer}
              text={this.state.text}
            />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

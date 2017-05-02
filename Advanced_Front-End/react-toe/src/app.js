import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from "./app.css";
import GameCell from "./components/gameCell";
import DisplayText from "./components/displayText";
import Grid from "./components/grid";

class App extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="main-grid">
        <Grid />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

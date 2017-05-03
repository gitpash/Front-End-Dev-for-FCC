import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from "./app.css";
import GameCell from "./components/gameCell";
import DisplayText from "./components/displayText";
import Grid from "./components/grid";
import StartGame from "./components/startGame";
let a = false;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showGrid: false,
      text: 'Start Game!'
    };
  }
  onClick() {
    this.setState({showGrid: true})
  } 
  render() {
    return (
      <div className="main-grid">
        {this.state.showGrid ? <Grid /> : <StartGame onClick={this.onClick.bind(this)} text={this.state.text}/>}
          
      </div>
    
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

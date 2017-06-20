import React from "react";
import css from "../app.css";

class StartGame extends React.Component {
  render() {
    return (
      <div className="start-game">
        <h2>To start the game choose mode</h2>
        <button className="btn-mode" onClick={this.props.handleOnePlayer}>
          single mode
        </button>
        <button className="btn-mode" onClick={this.props.handleTwoPlayer}>
          multiplayer
        </button>
      </div>
    );
  }
}

export default StartGame;

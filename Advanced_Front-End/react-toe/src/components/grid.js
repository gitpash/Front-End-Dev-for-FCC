import React from "react";
import GameCell from "./gameCell";
import DisplayText from "./displayText";
import calculateWinner from "./calculateWinner";

class Grid extends React.Component {
  constructor() {
    super();

    this.state = {
      allCells: Array(9).fill(null),
      nextPlayerState: true,
      win: false
    };
  }

  // click fn with prevent reassign value
  handleClick(i) {
    const allCells = this.state.allCells.slice();
    // console.log('before', this.state.allCells[i])
    if (this.state.allCells[i] !== null) return;
    else {
      allCells[i] = this.state.nextPlayerState ? "X" : "O";
      this.setState({
        allCells: allCells,
        nextPlayerState: !this.state.nextPlayerState,
        lastPlayer: allCells[i]
      });
    }
    if (calculateWinner(allCells)) {
      this.setState({ win: true });
      return;
    }
  }
  drawCell(i) {
    if (this.state.win === false)
      return (
        <GameCell
          value={this.state.allCells[i]}
          onClick={() => this.handleClick(i)}
          win={false}
        />
      );
    else {
      return (
        <GameCell
          value={this.state.allCells[i]}
          onClick={() => null}
          win={true}
          winner={this.state.lastPlayer}
        />
      );
    }
  }

  render() {
    console.log(this.state.allCells)
    return (
      <div className="game-board">
        <div className="board-row">
          {this.drawCell(0)}
          {this.drawCell(1)}
          {this.drawCell(2)}
        </div>
        <div className="board-row">
          {this.drawCell(3)}
          {this.drawCell(4)}
          {this.drawCell(5)}
        </div>
        <div className="board-row">
          {this.drawCell(6)}
          {this.drawCell(7)}
          {this.drawCell(8)}
        </div>
        <DisplayText
          value={this.state.nextPlayerState}
          win={this.state.win}
          lastPlayer={this.state.lastPlayer}
        />
      </div>
    );
  }
}

export default Grid;

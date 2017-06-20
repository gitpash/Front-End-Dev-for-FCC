import React from "react";
import GameCell from "./gameCell";
import DisplayText from "./displayText";
import {
  calculateWinner,
  legalMove,
  alternatePlayer,
  miniMax,
  aiNextMove
} from "./AI";

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCells: Array(9).fill(null),
      nextPlayerState: true,
      win: false,
      mode: this.props.mode,
      nextTurn: "X",
      winLine: [],
      draw: false,
      lastPlayer: "",
      restart: this.props.restart
    };
  }
  componentDidUpdate() {
    const { nextPlayerState, mode, nextTurn, win, restart } = this.state;
    mode === "single" &&
      nextPlayerState === false &&
      nextTurn === "O" &&
      win === false
      ? this.AIAmove()
      : null;
  }
  handleRestart = () => {
    this.setState({
      allCells: Array(9).fill(null),
      nextPlayerState: true,
      win: false,
      mode: this.props.mode,
      nextTurn: "X",
      winLine: [],
      draw: false,
      lastPlayer: "",
      restart: false
    });
  };

  AIAmove = () => {
    const { nextPlayerState, allCells, nextTurn, win } = this.state;

    miniMax("AI", allCells, undefined, -Infinity, Infinity);
    let nextMove = aiNextMove;
    allCells[nextMove] = nextTurn;
    const checkWin = calculateWinner(allCells);
    console.log(checkWin);
    if (checkWin[0]) {
      console.log(allCells);
      this.setState({ win: true, winLine: checkWin[1], lastPlayer: "O" });
    } else {
      this.setState({ allCells, nextTurn: "X", nextPlayerState: true });
      console.log(nextMove);
    }
  };
  // click fn and prevent reassign value
  handleClick(i) {
    const { allCells, win } = this.state;
    if (this.state.allCells[i] !== null) {
      return null;
    } else {
      allCells[i] = this.state.nextPlayerState ? "X" : "O";
      const winLine = calculateWinner(allCells);
      console.log(allCells);
      winLine[0] === true
        ? this.setState({
            win: true,
            allCells,
            lastPlayer: allCells[i],
            winLine: winLine[1]
          })
        : this.setState({
            allCells,
            nextPlayerState: !this.state.nextPlayerState,
            lastPlayer: allCells[i],
            nextTurn: "O"
          });
      if (!this.state.allCells.includes(null) && !this.state.win) {
        this.setState({ draw: true });
      }
    }
  }
  drawCell(i) {
    const { win, winLine, allCells, lastPlayer } = this.state;
    if (win === false) {
      return (
        <GameCell
          value={allCells[i]}
          onClick={() => this.handleClick(i)}
          win={false}
        />
      );
    } else {
      return (
        <GameCell
          value={allCells[i]}
          onClick={() => null}
          win={true}
          winner={lastPlayer}
          i={i}
          winline={winLine}
        />
      );
    }
  }

  render() {
    const { nextPlayerState, lastPlayer, win, draw } = this.state;
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
          value={nextPlayerState}
          win={win}
          lastPlayer={lastPlayer}
          draw={draw}
          handleRestart={this.handleRestart}
        />
      </div>
    );
  }
}

export default Grid;

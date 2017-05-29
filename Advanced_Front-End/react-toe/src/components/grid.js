import React from 'react'
import GameCell from './gameCell'
import DisplayText from './displayText'
import calculateWinner from './calculateWinner'

class Grid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allCells: Array(9).fill(null),
      nextPlayerState: true,
      win: false,
      mode: this.props.mode,
      nextTurn: 'X',
      winLine: [],
    }
  }

  // componentWillReceiveProps() {
  // const {allCells} = this.state
  //     if (calculateWinner(allCells)) {
  //       this.setState({win: true})
  //     }
  // }

  // for AI turn
  componentDidUpdate() {
    const {nextPlayerState, mode, nextTurn, win} = this.state
    // console.log(mode, win, nextPlayerState, nextTurn)
    mode === 'single' &&
      nextPlayerState === false &&
      nextTurn === 'O' &&
      win === false ?
      this.randomTurn(0, 9) :
      null
  }
  randomTurn(min, max) {
    const {nextPlayerState, allCells, nextTurn} = this.state
    let x = 0
    min = Math.ceil(min)
    max = Math.floor(max)
    function findMove() {
      x = Math.floor(Math.random() * (max - min + 1)) + min
      if (allCells[x] === null) {
        // console.log(allCells)
        return x
      } else {
        findMove()
      }
      return null
    }
    findMove()
    allCells[x] = 'O'
    const winLine = calculateWinner(allCells)
    winLine !== null ?
      this.setState({
        win: true,
        lastPlayer: 'O',
        nextTurn: 'X',
        winLine,
        allCells,
      }) :
      this.setState({nextPlayerState: true})
  }
  // click fn and prevent reassign value
  handleClick(i) {
    const allCells = this.state.allCells
    if (this.state.allCells[i] !== null) {
      return null
    } else {
      allCells[i] = this.state.nextPlayerState ? 'X' : 'O'
      const winLine = calculateWinner(allCells)
      winLine !== null ?
        this.setState({win: true, allCells, lastPlayer: 'X', winLine}) :
        this.setState({
          allCells,
          nextPlayerState: !this.state.nextPlayerState,
          lastPlayer: allCells[i],
          nextTurn: 'O',
        })
      console.log(winLine)
    }
  }
  drawCell(i) {
    const {win, winLine, allCells, lastPlayer} = this.state
    if (win === false) {
      return (
        <GameCell
          value={allCells[i]}
          onClick={() => this.handleClick(i)}
          win={false}
        />
      )
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
      )
    }
  }

  render() {
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
    )
  }
}

export default Grid

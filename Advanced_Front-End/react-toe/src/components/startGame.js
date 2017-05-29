import React from 'react'
import css from '../app.css'

class StartGame extends React.Component {
  render() {
    //console.log(this.props)
    return (
      <div className="start-game">
        <button onClick={this.props.handleOnePlayer}>onePlayer</button>
        <button onClick={this.props.handleTwoPlayer}>twoPlayer</button>
        <button onClick={this.props.onClick}>{this.props.text}</button>
      </div>
    )
  }
}

export default StartGame

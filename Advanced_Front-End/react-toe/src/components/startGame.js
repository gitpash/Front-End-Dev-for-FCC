import React from 'react'
import css from '../app.css'

class StartGame extends React.Component {
  render() {
    //console.log(this.props)
    return (
      <div className="start-game">
      <p>To start the game choose mode</p>
        <button onClick={this.props.handleOnePlayer}>onePlayer</button>
        <button onClick={this.props.handleTwoPlayer}>twoPlayer</button>
      </div>
    )
  }
}

export default StartGame

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import css from './app.css'
import GameCell from './components/gameCell'
import DisplayText from './components/displayText'
import Grid from './components/grid'
import StartGame from './components/startGame'
let a = false

class App extends React.Component {
 
  constructor() {
    super()

    this.state = {
      showGrid: false,
      text: 'Start Game!',
      mode: ''
    }
  }
  onClick = () => {
    this.setState({showGrid: true})
  }

  handleOnePlayer = () => {
    this.setState({mode: 'single'})
  }
  handleTwoPlayer = () => {
    this.setState({mode: 'multi'})
  }
  render() {
    return (
      <div className="main-grid">
        {this.state.showGrid ?
          <Grid mode={this.state.mode}/> :
          <StartGame
              onClick={this.onClick}
              handleOnePlayer={this.handleOnePlayer}
              handleTwoPlayer={this.handleTwoPlayer}
              text={this.state.text}
            />}

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

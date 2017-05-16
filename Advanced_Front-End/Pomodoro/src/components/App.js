import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      displayCount: 25,
      isRunning: "active",
      intervalId: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleActive = this.handleActive.bind(this);
  }
  handleClick() {
    const { displayCount, isRunning } = this.state;
    
       displayCount > 0
          ? this.setState({
              displayCount: displayCount - 1
            })
          : this.setState({ displayCount: 0 });
  }

  // handleActive() {
  //   this.state.isRunning === "active"
  //     ? this.setState({ isRunning: "inActive" })
  //     : this.setState({ isRunning: "active" });
  // }

  handleActive() {
    const { isRunning } = this.state
    if(isRunning === 'active') {
      
      let intervalId = setInterval(this.handleClick, 1000)
      this.setState({isRunning: 'inActive', intervalId: intervalId})
    }
    else {
      this.setState({isRunning: 'active'})
      clearInterval(this.state.intervalId)
    }
  }
  render() {
    const { displayCount, isRunning } = this.state;
    return (
      <div className="app-container">
        <div className="box-timer">
          <div
            onClick={() => this.handleActive()}
            className="circle"
          >
            <p>{displayCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


  //  onClick={() => {
  //             isRunning === "active"
  //               ? setInterval(() => this.handleClick(), 1000)
  //               : this.handleActive();
  //           }}
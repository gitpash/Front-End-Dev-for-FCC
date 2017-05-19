import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const audio = new Audio(
  "http://res.cloudinary.com/dymlhv20r/video/upload/v1495129220/258193__kodack__beep-beep_pxrzff.wav"
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      displayCount: 25,
      isRunning: "active",
      intervalId: "",
      displayMin: 25,
      displaySec: "00",
      displayBreak: 5,
      keepWorkingTime: 25,
      keepBreakingTime: 5
    };
  }
  handleClick = () => {
    const {
      displayCount,
      isRunning,
      displayMin,
      displaySec,
      keepWorkingTime,
      intervalId,
      displayBreak
    } = this.state;
    //check if timer is out
    if (displayMin === 0 && displaySec === 0) {
      audio.play();
      audio.play();
      //
      this.setState({
        displayMin: isRunning === "inActive" ? displayBreak : keepWorkingTime,
        displaySec: "00",
        isRunning: isRunning === "pauseBreak" ? "active" : "isBreak"
      });
      clearInterval(intervalId);
    } else {
      displaySec === "00" || displaySec === 0
        ? this.setState({
            displayMin: displayMin > 0 ? displayMin - 1 : 0,
            displaySec: 9
          })
        : this.setState({ displaySec: displaySec - 1 });
    }
  }
  // it's important to add intervalId overwise render reject clearInterval
  handleActive = () => {
    const { isRunning } = this.state;
    if (isRunning === "active" || isRunning === "isBreak") {
      let intervalId = setInterval(this.handleClick, 1000);
      this.setState({
        isRunning: isRunning === "active" ? "inActive" : "pauseBreak",
        intervalId: intervalId
      });
    } else {
      this.setState({
        isRunning: isRunning === "inActive" ? "active" : "isBreak"
      });
      clearInterval(this.state.intervalId);
    }
  }
  handleIncrease = (value) => {
    if (value === "work") {
      const { displayMin } = this.state;
      this.setState({ displayMin: displayMin + 1 });
    } else {
      const { displayBreak, keepBreakingTime } = this.state;
      this.setState({
        displayBreak: displayBreak + 1,
        keepBreakingTime: keepBreakingTime + 1
      });
    }
  }
  handleDecrease = (value) => {
    if (value === "work") {
      const { displayMin, keepWorkingTime } = this.state;
      this.setState({
        displayMin: displayMin > 1 ? displayMin - 1 : 1,
        keepWorkingTime: keepWorkingTime > 1 ? keepWorkingTime - 1 : 1
      });
    } else {
      const { displayMin, keepBreakingTime, displayBreak } = this.state;
      this.setState({
        displayBreak: displayBreak > 1 ? displayBreak - 1 : 1,
        keepBreakingTime: keepBreakingTime > 1 ? keepBreakingTime - 1 : 1
      });
    }
  }
  handleReset = () => {
    const {
      intervalId
    } = this.state;
    this.setState({
      displayMin: 25,
      displaySec: "00",
      displayBreak: 5,
      isRunning:"active",
      keepBreakingTime: 5
    })
    clearInterval(intervalId)
  };
  render() {
    const {
      displayMin,
      displaySec,
      displayBreak,
      isRunning,
      keepBreakingTime
    } = this.state;
    return (
      <div className="app-container">
        <div className="header">
          <h1>Pomodoro Timer</h1>
          <h5>tap circle to start/pause timer</h5>
        </div>
        <div className="mainTimer">
          __set working time:
          <div className="handle-btn">
            <button onClick={() => this.handleIncrease("work")}>+</button>
            <button onClick={() => this.handleDecrease("work")}>-</button>
          </div>
        </div>
        <div className="breakTimer">
          __set break to:{keepBreakingTime}min
          <div className="handle-btn">
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleDecrease}>-</button>
          </div>
        </div>
        <div className="box-timer">
          <div
            onClick={this.handleActive}
            className="circle"
            style={{
              background: isRunning === "active" || isRunning === "inActive"
                ? "#574945"
                : "#F2663E"
            }}
          >
            <p>{displayMin}:{displaySec}</p>
          </div>
        </div>
        <button className="reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;

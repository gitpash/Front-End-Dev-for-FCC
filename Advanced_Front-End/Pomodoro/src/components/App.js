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
            displaySec: 59
          })
        : this.setState({ displaySec: displaySec - 1 });
    }
  };
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
  };
  handleIncrease = value => {
    const {
      displayMin,
      keepBreakingTime,
      keepWorkingTime,
      displayBreak,
      isRunning,
      intervalId
    } = this.state;
    if (value === "work") {
      this.setState({
        displayMin: displayMin + 1,
        displaySec: "00",
        keepWorkingTime: keepWorkingTime + 1,
        isRunning: "active"
      });
    } else {
      this.setState({
        displayBreak: displayBreak + 1,
        keepBreakingTime: keepBreakingTime + 1
      });
    }
    clearInterval(intervalId);
  };
  handleDecrease = value => {
    const {
      displayMin,
      keepWorkingTime,
      keepBreakingTime,
      displayBreak,
      isRunning,
      intervalId
    } = this.state;
    if (value === "work") {
      this.setState({
        displayMin: displayMin > 1 ? displayMin - 1 : 1,
        keepWorkingTime: keepWorkingTime > 1 ? keepWorkingTime - 1 : 1,
        isRunning: "active",
        displaySec: "00"
      });
    } else {
      this.setState({
        displayBreak: displayBreak > 1 ? displayBreak - 1 : 1,
        keepBreakingTime: keepBreakingTime > 1 ? keepBreakingTime - 1 : 1
      });
    }
    clearInterval(intervalId);
  };
  handleReset = () => {
    const { intervalId } = this.state;
    this.setState({
      displayMin: 25,
      displaySec: "00",
      displayBreak: 5,
      isRunning: "active",
      keepBreakingTime: 5,
      intervalId: ""
    });
    clearInterval(intervalId);
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
          <h4>tap circle to start/pause timer</h4>
        </div>
        <div className="mainTimer">
          __set working time:
          <div className="handle-btn">
            <button onClick={() => this.handleIncrease("work")}>+</button>
            <button onClick={() => this.handleDecrease("work")}>-</button>
          </div>
        </div>
        <div className="breakTimer">
          __set break <span> {keepBreakingTime} </span>min
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
App.propTypes = {
  displayBreak: PropTypes.number,
  displayCount: PropTypes.number,
  displayMin: PropTypes.number,
  displaySec: PropTypes.number,
  isRunning: PropTypes.string,
  keepBreakingTime: PropTypes.number,
  keepWorkingTime: PropTypes.number,
  intervalId: PropTypes.number
};
export default App;

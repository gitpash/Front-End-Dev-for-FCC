import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.state = {
      displayCount: 25,
      isRunning: "active"
    };
  }
  handleClick() {
    const { displayCount, isRunning } = this.state;
    displayCount > 0
      ? this.setState({
          displayCount: displayCount - 1
        })
      : this.setState({ displayCount: 0 });
      setInterval(this.handleClick, 1000)
  }
  
  handleActive() {
    this.state.isRunning === "active"
      ? this.setState({ isRunning: "inActive" })
      : this.setState({ isRunning: "active" });
  }
  render() {
    const { displayCount, isRunning } = this.state;
    return (
      <div className="app-container">
        <div className="box-timer">
          <div
            onClick={
              isRunning === "active"
                ? () => this.handleClick()
                : () => this.handleActive()
            }
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

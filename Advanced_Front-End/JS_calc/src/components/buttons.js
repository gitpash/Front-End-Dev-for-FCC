import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'

let displayedValue = "";
let result = "";
let arg1, arg2, arg3;

class ButtonsBlock extends React.Component {
  constructor() {
    super();

    this.state = {
      displayDigit: displayedValue,
      action: null
    };
    this.sendValue = this.sendValue.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
  }

  handleBackspace() {
    if (result === "") {
      displayedValue = displayedValue.slice(0, -1);
      this.setState({ displayDigit: displayedValue });
    } else {
      result = result.toString().slice(0, -1);
      this.setState({ displayDigit: result });
    }
  }
  sendValue(value) {
    if (displayedValue.length === 12) {
      return null;
    }
    displayedValue += value;
    this.setState({
      displayDigit: displayedValue
    });
  }
  handleEqual() {
    const { action, displayDigit } = this.state;
    arg2 = parseFloat(displayDigit);
    performAction(action);
    let len = result.toString().length;
    if (len > 12) {
      let comma = result.toString().indexOf(".");
      result = parseFloat(result.toFixed(12 - comma));
    }
    if (result > 999999999999) {
      result = result.toExponential(3);
    }
    this.setState({
      displayDigit: result,
      action: null
    });
    displayedValue = "";
    arg1 = 0;
    arg2 = 0;
  }

  handleAction(val) {
    const { action, displayDigit } = this.state;
    if (action) {
      arg2 = displayDigit;
      performAction(action);
      arg1 = result;
    } else {
      arg1 = parseFloat(this.state.displayDigit);
    }
    this.setState({
      action: val
    });
    displayedValue = "";
  }
  handleClear() {
    arg1 = 0;
    arg2 = 0;
    displayedValue = "";
    this.setState({
      displayDigit: ""
    });
  }
  render() {
    return (
      <div className="calc-wrap">
        <div className="display">
          <p dir="rtl">{this.state.displayDigit}</p>
        </div>
        <div className="top-bar">
          <Button
            color="tomato"
            width="50px"
            value="<-"
            onClick={() => this.handleBackspace()}
          />
          <Button
            color="tomato"
            value="CE"
            onClick={() => this.handleClear()}
          />
        </div>
        <div className="num-pad">
          <div className="digit-block">
            <Button value="9" onClick={value => this.sendValue(value)} />
            <Button value="8" onClick={value => this.sendValue(value)} />
            <Button value="7" onClick={value => this.sendValue(value)} />
            <Button value="6" onClick={value => this.sendValue(value)} />
            <Button value="5" onClick={value => this.sendValue(value)} />
            <Button value="4" onClick={value => this.sendValue(value)} />
            <Button value="3" onClick={value => this.sendValue(value)} />
            <Button value="2" onClick={value => this.sendValue(value)} />
            <Button value="1" onClick={value => this.sendValue(value)} />
            <Button
              value="="
              color="olive"
              onClick={() => this.handleEqual()}
            />
            <Button value="." onClick={value => this.sendValue(value)} />
            <Button value="0" onClick={value => this.sendValue(value)} />
          </div>
          <div className="action-bar">
            <Button
              value="*"
              color="olive"
              onClick={value => this.handleAction(value)}
            />
            <Button
              value="/"
              color="olive"
              onClick={value => this.handleAction(value)}
            />
            <Button
              value="+"
              color="olive"
              onClick={value => this.handleAction(value)}
            />
            <Button
              value="-"
              color="olive"
              onClick={value => this.handleAction(value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

ButtonsBlock.propTypes = {
  result: PropTypes.string,
  action: PropTypes.string
}
class Button extends React.Component {
  render() {
    const value = this.props.value;
    return (
      <button
        className="btn-digit"
        style={{ background: this.props.color, width: this.props.width }}
        onClick={() => this.props.onClick(value)}
      >
        {value}
      </button>
    );
  }
}

export default ButtonsBlock;

function performAction(action) {
  if (action === "*") result = arg1 * arg2;
  else if (action === "/") result = arg1 / arg2;
  else if (action === "+") result = arg1 + arg2;
  else if (action === "-") result = arg1 - arg2;
  else result = arg1;
}

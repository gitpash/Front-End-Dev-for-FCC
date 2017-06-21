import React from "react";

const GameCell = props => {
  if (!props.win) {
    return (
      <button className="gameCell" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  } else {
    // check if winning array include certain cell and make it red
    if (props.winline.includes(props.i)) {
      return (
        <button
          className="gameCell winLine"
          onClick={() => props.onClick()}
        >
          {props.value}
        </button>
      );
    } else {
      return (
        <button className="gameCell" onClick={() => props.onClick()}>
          {props.value}
        </button>
      );
    }
  }
};
export default GameCell;

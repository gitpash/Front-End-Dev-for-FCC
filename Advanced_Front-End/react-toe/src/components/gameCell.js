import React from 'react';

const GameCell = props => {
  if (!props.win) {
    return (
      <button className="gameCell" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  } else {
    if (props.value === props.winner) {
      return (
        <button
          className="gameCell"
          onClick={() => props.onClick()}
          style={{ color: "red" }}
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
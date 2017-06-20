import React from "react";

// render next player msg and if game win replace it with winner
const DisplayText = props =>
  <div className="log-text">
    {!props.draw
      ? !props.win
        ? <p>Next Turn: <span>{props.value ? "X" : "O"}</span></p>
        : <p>Winner is: <span>{props.lastPlayer}</span></p>
      : <p>It's Draw!</p>}
    {props.win || props.draw
      ? <button className="btn-restart" onClick={props.handleRestart}>
          play again!
        </button>
      : null}
  </div>;

export default DisplayText;

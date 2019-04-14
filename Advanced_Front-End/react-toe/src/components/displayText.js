import React from 'react';
import '../app.scss';

const DisplayText = ({
  isDraw,
  hasWinner,
  handleRestart,
  value,
  lastPlayer,
}) => {
  const drawInfoMessage = () => {
    if (hasWinner) {
      return (
        <p>
          Winner is: <span className="turnInfo">{lastPlayer}</span>
        </p>
      );
    }
    if (isDraw) {
      return <span className="turnInfo">It&apos;s Draw!</span>;
    }
    return (
      <p>
        Next Turn: <span className="turnInfo">{value ? 'X' : 'O'}</span>
      </p>
    );
  };

  return (
    <div className="log-text">
      {drawInfoMessage()}
      {hasWinner || isDraw ? (
        <button className="btn-restart" onClick={handleRestart} type="button">
          play again!
        </button>
      ) : null}
    </div>
  );
};

export default DisplayText;

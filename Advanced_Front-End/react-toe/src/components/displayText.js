import React from 'react';

// render next player msg and if game win replace it with winner
const DisplayText = ({ isDraw, hasWinner, handleRestart, value, lastPlayer }) => {
  const drawInfoMessage = () => {
    if (hasWinner) {
      return (
        <p>
          Winner is: <span>{lastPlayer}</span>
        </p>
      );
    }
    if (isDraw) {
      return <p>It's Draw!</p>;
    }
    return (
      <p>
        Next Turn: <span>{value ? 'X' : 'O'}</span>
      </p>
    );
  };

  return (
    <div className="log-text">
      {drawInfoMessage()}
      {hasWinner || isDraw ? (
        <button className="btn-restart" onClick={handleRestart}>
          play again!
        </button>
      ) : null}
    </div>
  );
};

export default DisplayText;

import React from 'react';

const GameCell = ({ onClick, i, winLine, value }) => {
  const isWinnerLine = winLine && winLine.includes(i);
  return (
    <button
      className={`gameCell ${isWinnerLine ? 'winLine' : ''}`}
      onClick={onClick}
      type="button"
    >
      {value}
    </button>
  );
};
export default GameCell;

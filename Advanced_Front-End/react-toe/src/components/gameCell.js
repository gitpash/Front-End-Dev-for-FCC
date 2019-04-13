import React from 'react';

const GameCell = ({ hasWinner, onClick, i, winLine, value }) => {
  const isWinnerLine = winLine && winLine.includes(i);
  return (
    <button
      className={`gameCell ${isWinnerLine ? 'winLine' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
  // }
  // if (!win) {
  //   return (
  //     <button className="gameCell" onClick={() => onClick()}>
  //       {value}
  //     </button>
  //   );
  // } else {
  //   // check if winning array include certain cell and make it red
  //   if (winline.includes(i)) {
  //     return (
  //       <button className="gameCell winLine" onClick={() => onClick()}>
  //         {value}
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button className="gameCell" onClick={() => onClick()}>
  //         {value}
  //       </button>
  //     );
  //   }
  // }
};
export default GameCell;

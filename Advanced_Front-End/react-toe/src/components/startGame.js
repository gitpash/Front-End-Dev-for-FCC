import React from 'react';
import '../app.scss';

function StartGame({ handleOnePlayer, handleTwoPlayer }) {
  return (
    <div className="start-game">
      <p>To start the game choose mode</p>
      <button className="btn-mode" onClick={handleOnePlayer} type="button">
        fight AI
      </button>
      <button className="btn-mode" onClick={handleTwoPlayer} type="button">
        hotseat
      </button>
    </div>
  );
}

export default StartGame;

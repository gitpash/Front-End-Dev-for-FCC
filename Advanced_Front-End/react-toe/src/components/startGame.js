import React from 'react';
import '../app.css';

function StartGame({ handleOnePlayer, handleTwoPlayer }) {
  return (
    <div className="start-game">
      <h2>To start the game choose mode</h2>
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

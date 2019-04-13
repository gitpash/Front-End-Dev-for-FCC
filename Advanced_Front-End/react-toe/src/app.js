import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Grid from './components/grid';
import StartGame from './components/startGame';

function App() {
  const [gameMode, setGameMode] = useState(null);

  return (
    <div className="main-grid">
      {gameMode ? (
        <>
          <Grid mode={gameMode} />
          <button
            className="btn-mainMenu"
            onClick={() => setGameMode(null)}
            type="button"
          >
            Menu
          </button>
        </>
      ) : (
        <StartGame
          handleOnePlayer={() => setGameMode('single')}
          handleTwoPlayer={() => setGameMode('multi')}
          text="Start Game!"
        />
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

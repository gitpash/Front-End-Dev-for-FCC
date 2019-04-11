import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import css from './app.css';
import GameCell from './components/gameCell';
import DisplayText from './components/displayText';
import Grid from './components/grid';
import StartGame from './components/startGame';

function App() {
  const [gameMode, setGameMode] = useState(null);
  
  return (
    <div className="main-grid">
      {gameMode ? (
        <Grid mode={gameMode} />
      ) : (
        <>
          <button className="btn-mainMenu" onClick={() => setGameMode(null)}>
            Menu
          </button>
          <StartGame
            handleOnePlayer={() => setGameMode('single')}
            handleTwoPlayer={() => setGameMode('multi')}
            text="Start Game!"
          />
        </>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

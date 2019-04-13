import React, { useState, useEffect } from 'react';
import GameCell from './gameCell';
import DisplayText from './displayText';
import { calculateWinner, miniMax, aiNextMove } from './AI';

function Grid({ mode }) {
  const blankField = new Array(9).fill(null);
  const [allCells, setAllCells] = useState(blankField);
  const [nextPlayerState, setNextPlayerState] = useState(true);
  const [lastPlayer, setLastPlayer] = useState(null);
  const [nextTurn, setNextTurn] = useState('X');

  const [hasWinner, setWinner] = useState(false);
  const [winLine, setWinLine] = useState([]);

  const shouldTriggerAIMove =
    mode === 'single' &&
    nextPlayerState === false &&
    nextTurn === 'O' &&
    !hasWinner;

  const handleRestart = () => {
    setAllCells(blankField);
    setNextPlayerState(true);
    setWinLine([]);
    setWinner(false);
    setNextTurn('X');
    setNextPlayerState(true);
  };

  const nextAIAmove = () => {
    miniMax('AI', allCells, undefined, -Infinity, Infinity);
    const nextMove = aiNextMove;
    allCells[nextMove] = nextTurn;
    const checkWin = calculateWinner(allCells);

    if (checkWin[0]) {
      setWinner(true);
      setWinLine(checkWin[1]);
      setLastPlayer('O');
    } else {
      setAllCells(allCells);
      // TODO: probably not needed
      setNextTurn('X');
      setNextPlayerState(true);
    }
  };

  const handleClick = i => {
    /** prev reassign same cell */
    if (allCells[i]) {
      return null;
    } else {
      allCells[i] = nextPlayerState ? 'X' : 'O';
      const newWinLine = calculateWinner(allCells);

      if (newWinLine[0] === true) {
        setWinner(true);

        setWinLine(newWinLine[1]);
      } else {
        setNextPlayerState(!nextPlayerState);
        // TODO: need alrogithm optimisation
        setLastPlayer(allCells[i]);
        setNextTurn('O');
      }
      return setAllCells(allCells);
    }
  };
  const drawCell = i => {
    return (
      <GameCell
        i={i}
        value={allCells[i]}
        onClick={() => handleClick(i)}
        hasWinner={hasWinner}
        winner={lastPlayer}
        winLine={winLine}
      />
    );
  };

  useEffect(() => (shouldTriggerAIMove ? nextAIAmove() : undefined));

  const isDraw = !allCells.includes(null) || hasWinner;

  return (
    <div className="game-board">
      <div className="board-row">
        {drawCell(0)}
        {drawCell(1)}
        {drawCell(2)}
      </div>
      <div className="board-row">
        {drawCell(3)}
        {drawCell(4)}
        {drawCell(5)}
      </div>
      <div className="board-row">
        {drawCell(6)}
        {drawCell(7)}
        {drawCell(8)}
      </div>
      <DisplayText
        value={nextPlayerState}
        hasWinner={hasWinner}
        lastPlayer={lastPlayer}
        isDraw={isDraw}
        handleRestart={handleRestart}
      />
    </div>
  );
}

export default Grid;

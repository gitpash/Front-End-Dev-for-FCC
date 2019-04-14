let winLine = [];
/* eslint-disable import/no-mutable-exports */
let aiNextMove;
const letters = { human: 'X', AI: 'O' };
function alternatePlayer(currentPlayer) {
  return currentPlayer === 'human' ? 'AI' : 'human';
}

function calculateWinner(allCells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      allCells[a] &&
      allCells[a] === allCells[b] &&
      allCells[a] === allCells[c]
    ) {
      winLine = lines[i];
      return [true, winLine];
    }
  }
  return [false, []];
}

function legalMove(allCells) {
  const moves = [];
  allCells.forEach((cell, index) => (cell === null ? moves.push(index) : null));
  return moves;
}

function miniMax(player, allCells, depth = 0, alpha, beta) {
  if (calculateWinner(allCells)[0]) {
    return player === 'AI' ? depth - 10 : 10 - depth;
  }
  if (allCells.includes(null) === false || depth >= 6) {
    return 0;
  }

  // define free moves
  const freeMoves = legalMove(allCells); // [0,2,7]

  if (player === 'AI') {
    for (let i = 0; i < freeMoves.length; i++) {
      // duplicates board variable to pass a modified board as parameter to recursive call
      const testBoard = allCells.slice(0, allCells.length);

      testBoard[freeMoves[i]] = letters[player];

      const score = miniMax(
        alternatePlayer(player),
        testBoard,
        depth + 1,
        alpha,
        beta,
      );

      if (score > alpha) {
        /* eslint-disable no-param-reassign */
        alpha = score;

        if (depth === 0) {
          aiNextMove = freeMoves[i];
        }
      }

      if (alpha >= beta) {
        break;
      }
    }
    return alpha;
  }

  for (let i = 0; i < freeMoves.length; i++) {
    const testBoard = allCells.slice(0, allCells.length);
    testBoard[freeMoves[i]] = letters[player];

    const score = miniMax(
      alternatePlayer(player),
      testBoard,
      depth + 1,
      alpha,
      beta,
    );
    // alpha-beta pruning
    if (score < beta) {
      beta = score;
    }
    if (alpha >= beta) {
      break;
    }
  }
  return beta;
}

/** test */
// let board1 = ["X", "O", null, "X", "O", "X", "O", null, null];
// let board2 = [null, "X", null, "O", "O", "X", "X", null, "O"];
// let board3 = ["X", "O", null, "O", "O", "X", "X", null, null];

export { calculateWinner, alternatePlayer, miniMax, aiNextMove };

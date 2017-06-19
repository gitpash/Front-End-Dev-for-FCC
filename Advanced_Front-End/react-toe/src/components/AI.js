let winLine = [];
let aiNextMove;
const letters = { "human": "X", "AI": "O" };
function alternatePlayer(currentPlayer) {
  return currentPlayer == "human" ? "AI" : "human";
}

function calculateWinner(allCells) {
  // console.log(allCells)
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
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
      //console.log(winLine)
    }
  }
  return [false, []];
}


function miniMax(player, allCells, depth = 0, alpha, beta) {
  // console.log(allCells);
  if (calculateWinner(allCells)[0]) {
    return player === "AI" ? depth - 10 : 10 - depth;
  } else if (allCells.includes(null) === false) {
    return 0;
  } else if (depth >= 6) {
    return 0;
  }

  // define free moves
  let freeMoves = legalMove(allCells); // [0,2,7]

  if (player === "AI") {
    // Loop through possible moves
    for (let i = 0; i < freeMoves.length; i++) {
      // duplicates board variable to pass a modified board as parameter to recursive call
      let testBoard = allCells.slice(0, allCells.length);

      testBoard[freeMoves[i]] = letters[player];
      // simulates a hypothetical move on the board using recursion and obtains a score
      // based on that move using minimax
      let score = miniMax(
        alternatePlayer(player),
        testBoard,
        depth + 1,
        alpha,
        beta
      );
      // gathers highest alpha score for decision tree level
      if (score > alpha) {
        alpha = score;
        // Only decides the AI player's next move if the depth is 0
        // All depths above 0 are simulations for future moves
        if (depth === 0) {
          aiNextMove = freeMoves[i];
        }
      }
      // If a higher score was already decided by minimax, stop evaluating children decision nodes
      // that return a score lower than the max score on the parent node
      if (alpha >= beta) {
        break;
      }
    }
    return alpha;
  } else {

    for (let i = 0; i < freeMoves.length; i++) {
      // Duplicate board variable to pass a modified board as parameter to recursive call
      let testBoard = allCells.slice(0, allCells.length);
      testBoard[freeMoves[i]] = letters[player];
      // Simulates a hypothetical move on the board using recursion and obtains a score
      // based on that move using minimax
      let score = miniMax(
        alternatePlayer(player),
        testBoard,
        depth + 1,
        alpha,
        beta
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
}

function legalMove(allCells) {
  let moves = [];
  allCells.forEach((cell, index) => (cell === null ? moves.push(index) : null));
  return moves;
}
//legalMove(allCells)

// check win or not and
function scoreBoard(allCells, player) {
  let score = 0;
  let a = calculateWinner(allCells)[1];
  if (a.length === 3) {
    //console.log(a)
    allCells[a[0]] === "X" ? (score += 10) : (score += -10);
  }
  // console.log(score)
  return score;
}
//calculateWinner(['X', 'O', null, 'X', 'O', 'X', 'X', null, null])
//scoreBoard('X')
//legalMove(allCells)
let board1 = ["X", "O", null, "X", "O", "X", "O", null, null];
let board2 = [null, "X", null, "O", "O", "X", "X", null, "O"];
let board3 = ["X", "O", null, "O", "O", "X", "X", null, null]
// miniMax("AI", board3, undefined, -Infinity, Infinity);
// console.log(aiNextMove);
export {calculateWinner, legalMove, alternatePlayer, miniMax, aiNextMove};

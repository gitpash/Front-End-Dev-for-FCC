let winLine = []

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
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (
      allCells[a] && allCells[a] === allCells[b] && allCells[a] === allCells[c]
    ) {
      winLine = lines[i]
      return [true, winLine]
      //console.log(winLine)
    }
  }
  //return null;
  return [false, []]
}


let allCells = [null, 'X', null, 'O', 'O', 'X', 'X', null, 'O']
// test with alpha-beta pruning
let score = 0
let bestMove = -1
function miniMax(depth, player, alpha, beta, allCells) {
  let testBoard = allCells

  if (
    calculateWinner(testBoard)[0] ||
    testBoard.includes(null) === false ||
    depth === 0
  ) {
    score = scoreBoard(testBoard, player)
    // console.log(`inside first if: score = ${score} and bestMove = ${bestMove}`)
    return [score, bestMove]
  }
  let freeMoves = legalMove(testBoard) // [0,2,7]
  
  
  for (let i = 0; i < freeMoves.length; i++) {
    testBoard[freeMoves[i]] = player

    // console.log(`inside for loop: i=${i} score=${score} bestMove=${bestMove}`)
// console.log(testBoard)
    if (player === 'O') {
      score = miniMax(depth - 1, 'X', alpha, beta, testBoard)[0]

// console.log(`inside if player === 0: score=${score} i=${i}`)
      if (score > alpha) {
        // console.log(`if score > alpha: alpha before=${alpha} `)
        alpha = score
        bestMove = freeMoves[i]
        // console.log(`if score > alpha: alpha=${alpha} score=${score} bestMove=${bestMove} i=${i} freemoves=${freeMoves} `)
      }
    } else {
      score = miniMax(depth - 1, 'O', alpha, beta, testBoard)[0] // step1: 0
      // console.log(`inside player === X: score=${score} `)
      if (score < beta) {
        beta = score // step1: beta = 0
        bestMove = freeMoves[i] // step1: 0
        // console.log(`if score < beta: beta=${beta} score=${score} bestMove=${bestMove}  i=${i} freemoves=${freeMoves}`)
      }
    }
    testBoard[freeMoves[i]] = null // set initial state
    // console.log(`state is back to initial: alpha=${alpha} beta=${beta} score=${score} bestMove=${bestMove} `)
    if (alpha >= beta) {
      // console.log(`prune alpha=${alpha} beta=${beta} `)
      break
    }
  }
  //console.log(player)
  score = player === 'O' ? alpha : beta
  // console.log(score, bestMove)
  return [score, bestMove]
}

function legalMove(allCells) {
  let moves = []
  allCells.forEach((cell, index) => (cell === null ? moves.push(index) : null))
  return moves
}
//legalMove(allCells)

function scoreBoard(allCells, player) {
  let score = 0
  let a = calculateWinner(allCells)[1]
  if (a.length === 3) {
    //console.log(a)
    allCells[a[0]] === 'X'? (score += 10) : (score += -10)
  }
  // console.log(score)
  return score
}
//calculateWinner(['X', 'O', null, 'X', 'O', 'X', 'X', null, null])
//scoreBoard('X')
//legalMove(allCells)
miniMax(4, 'X', -Infinity, Infinity, [
  null,
  'X',
  null,
  'O',
  'O',
  'X',
  'X',
  null,
  'O',
])
// console.log(a)
// export {calculateWinner, scoreBoard, legalMove, miniMax};


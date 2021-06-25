// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true



const exist = function(board, word) {
  const positions = [];
  const len = board.length
  const wid = board[0].length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < wid; j++) {
      positions.push(i.toString() + j.toString())
    }
  }
  console.log(positions)

  const startPoint = function(board, word) {
    const startLetter = word[0]
    const result = []
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < wid; j++) {
        if (board[i][j] === startLetter) 
      }
    }
  }

  const adjcent = function(current, target, board) {
    const limit = board.length
    const neighbours = []
  }
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word = "ABCCED"
exist(board, word)
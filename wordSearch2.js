// Input:
// board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
// words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

const startPoint = (board, word) => {
  const startPosition = []
  const startLetter = word[0]
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++){
      if (board[i][j] === startLetter){
        startPosition.push([i, j])
      }
    }
  }
  return startPosition
}

const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
const words = ["oath","pea","eat","rain"]
// console.log(startPoint(board, words[0]))

const neighbour = (position, board) => {
  const x = position[0]
  const y = position[1]
  const nearPositions = []
  if (x + 1 < board.length) nearPositions.push([x + 1, y])
  if (y + 1 < board.length) nearPositions.push([x, y + 1])
  if (x - 1 >= 0) nearPositions.push([x - 1, y])
  if (y - 1 >= 0) nearPositions.push([x, y - 1])
  return nearPositions
}

// console.log(neighbour([1, 1], board))
const result = []
const wordSearch = (board, words) => {
  words.forEach((word) => {
    let startPoints = startPoint(board, word)
    let currentLetter = 1
    if (startPoints.length > 0) {
      startPoints.forEach(point => {
        let neighbourPositions = neighbour(point, board)
        neighbourPositions.forEach(neighbourPosition => {
          whetherPair(board, word, currentLetter, neighbourPosition)
        })
      })
    }
  })
}

const whetherPair = (board, word, currentLetter, neighbourPosition) => {
  if (currentLetter < word.length){
    if (board[neighbourPosition[0]][neighbourPosition[1]] === word[currentLetter]){
      currentLetter += 1
      let neighbourPositions = neighbour(neighbourPosition, board)
      neighbourPositions.forEach(position => whetherPair(board, word, currentLetter, position))
    }
  }
  if (currentLetter === word.length && !result.includes(word)) result.push(word)
}


wordSearch(board, words)
console.log(result)
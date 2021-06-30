// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

const neighbour = (arr, board) => {
  const x = arr[0]
  const y = arr[1]
  const near = []
  for (let i = -1; i <= 1; i++){
    for (let j = -1; j <= 1; j++){
      if (i === j && i === 0) continue
      if (0 <= (x + i) && (x + i) < board.length && 0 <= (y + j) && (j + y) < board.length) near.push([x + i, y + j])
    }
  }
  let adjcentLife = 0
  near.forEach(position => {
    if (board[position[0]][position[1]] === 1) adjcentLife += 1
  })
  return adjcentLife
}

const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// neighbour([1, 1], board)

const gameLife = board => {
  const result = []
  for(let i = 0; i < board.length; i++){
    let row = []
    for (let j = 0; j < board[0].length; j++){
      let neighbourLife = neighbour([i, j], board)
      if (neighbourLife < 2 || neighbourLife > 3 ) row.push(0)
      if (neighbourLife === 3) row.push(1)
      if (neighbourLife === 2) row.push(board[i][j])
    }
    result.push(row)
  }
  console.log(result)
}

gameLife(board)
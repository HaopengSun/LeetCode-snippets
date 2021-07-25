const gridTravellerTabulation = (m, n, memo={}) => {
  if (m === 0 || n === 0) return 0
  if (m === 1 && n === 1) return 1

  let key = m.toString() + n.toString()
  if (key in memo) return memo[key]

  memo[key] = gridTravellerTabulation(m - 1, n, memo) + gridTravellerTabulation(m , n - 1, memo)
  return memo[key]
}

// console.log(gridTravellerTabulation(3, 3))


// initialize a 2d grid with value of zero
// this grid is not the real grid that the traveller can go throught
// this grid is for showing the count of ways that the grid can go

const gridTravellerTabulation1 = (m, n) => {
  const grid = []
  while(m >= 0){
    grid.push(Array(n + 1).fill(0))
    m--
  }

  // going throught a 1 * 1 grid can only have one way
  grid[1][1] = 1
  
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
      let curr = grid[i][j]
      if (i + 1 < grid.length) grid[i + 1][j] += curr
      if (j + 1 < grid[i].length) grid[i][j + 1] += curr
    }
  }

  console.log(grid)
}

gridTravellerTabulation1(3, 3)
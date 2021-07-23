// can just go down or right
const nextStep = (position, grid) => {
  const next = []
  if (position[0] + 1 < grid[0].length) next.push([position[0] + 1, position[1]])
  if (position[1] + 1 < grid.length) next.push([position[0], position[1] + 1])
  return next
}

const grid = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
]

// console.log(nextStep([2, 2], grid))

let result = 0
const gridTravel = (startPoint, grid) => {
  let next = nextStep(startPoint, grid)
  if(next.length !== 0){
   next.forEach(n => {
     gridTravel(n, grid)
   })
  } else {
    result += 1
  }
}

// gridTravel([0, 0], grid)
// console.log(result)


// recursion solution
const gridTravel1 = (m, n) => {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  return gridTravel1(m - 1, n) + gridTravel1(m , n - 1)
}

// console.log(gridTravel1(3, 3))


// recursion solution with saving
const gridTravel2 = (m, n, memo = {}) => {
  const key = m + ',' + n
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  if (key in memo) return memo[key]
  memo[key] = gridTravel1(m - 1, n, memo) + gridTravel1(m , n - 1, memo)
  return memo[key]
}

console.log(gridTravel2(10, 10))
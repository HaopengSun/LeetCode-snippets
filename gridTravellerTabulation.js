const gridTravellerTabulation = (m, n, memo={}) => {
  if (m === 0 || n === 0) return 0
  if (m === 1 && n === 1) return 1
  
  let key = m.toString() + n.toString()
  if (key in memo) return memo[key]

  memo[key] = gridTravellerTabulation(m - 1, n, memo) + gridTravellerTabulation(m , n - 1, memo)
  return memo[key]
}

console.log(gridTravellerTabulation(10, 10))
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

const nextCell = function(arr, grid){
  const next = [];
  if (arr[0] + 1 < grid.length) next.push([arr[0] + 1, arr[1]]);
  if (arr[1] + 1 < grid.length) next.push([arr[0], arr[1] + 1]);
  return next
}

const grid = [[1,3,1],[1,5,1],[4,2,1]]
const minimumValue = []

const minimumPath = function(position, current, grid){
  nextCell(position, grid).map(element => {
    if (element[0] === grid.length - 1 && element[1] === grid.length - 1) {
      minimumValue.push(current + grid[grid.length - 1][grid.length - 1])
    } else {
      minimumPath(element, (current + grid[element[0]][element[1]]), grid)
    }
  })
}

minimumPath([0, 0], 1, grid)
console.log(minimumValue)

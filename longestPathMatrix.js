// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].


// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

// function returns the next step in the matrix.
const neighbour = (arr, matrix) => {
  const nextStep = [];
  if (arr[0] + 1 < matrix.length) {
    if (matrix[arr[0] + 1][arr[1]] > matrix[arr[0]][arr[1]]){
      nextStep.push([arr[0] + 1, arr[1]])
    }
  }
  if (arr[0] - 1 >= 0) {
    if (matrix[arr[0] - 1][arr[1]] > matrix[arr[0]][arr[1]]){
      nextStep.push([arr[0] - 1, arr[1]])
    }
  }
  if (arr[1] + 1 < matrix.length) {
    if (matrix[arr[0]][arr[1] + 1] > matrix[arr[0]][arr[1]]){
      nextStep.push([arr[0], arr[1] + 1])
    }
  }
  if (arr[1] - 1 >= 0) {
    if (matrix[arr[0]][arr[1] - 1] > matrix[arr[0]][arr[1]]){
      nextStep.push([arr[0], arr[1] - 1])
    }
  }
  return nextStep
}

const matrix = [[3,4,5],[3,2,6],[2,2,1]]
// console.log(neighbour([1, 2], matrix))

// const resultFirstPoint = [[0, 0]]

const longest = function(position, step, matrix){
  console.log(position)
  let nextStep = neighbour(step, matrix)
  // console.log(nextStep)
  if (nextStep.length !== 0){
    nextStep.map(step => {
      // console.log(position, step)
      position.push(step)
      longest(position, step, matrix)
    })
  }
  if (nextStep.length === 0){
    // console.log(position)
    resultFirstPoint.push(position)
  }
}

// const longestPathMatrix = function(matrix){
//   for (let i = 0; i < matrix.length; i++){
//     for(let j = 0; j < matrix.length; j++){
//       let statingPoint = [[i, j]]
//       longest(statingPoint, [i, j], matrix)
//       console.log(statingPoint)
//     }
//   }
// }

const resultFirstPoint = [[1, 1]]
longest(resultFirstPoint, [1, 1], matrix)
// longestPathMatrix(matrix)
// console.log(resultFirstPoint)
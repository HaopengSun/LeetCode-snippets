// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

const squares = [];

const pool = n => {
  let square = 1
  while (Math.pow(square, 2) < n){
    squares.push(Math.pow(square, 2))
    square++
  }
}

const result = [];

// squares = [1, 4, 9]
const perfectSquares = (curr, n, squares) => {
  if (n > 0) {
    squares.forEach(square => {
      if (square <= n) perfectSquares([...curr, square], n - square, squares)
    })
  }
  if (n === 0) result.push(curr)
}

const n = 13
pool(n)
console.log(squares)
perfectSquares([], n, squares)
console.log(result)
let mini = n
result.forEach(r => {
  if (r.length < mini) mini = r.length
})
console.log(mini)
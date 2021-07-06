// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const pascal = numRows => {
  const initial = [[1], [1, 1]]
  if (numRows === 1) return initial[0]
  if (numRows === 2) return initial
  if (numRows > 2){
    let index = numRows - 2
    while (index > 0){
      console.log(numRows, index)
      initial.push(triangle(initial[initial.length - 1]))
      index -= 1
    }
  }
  return initial
}

const triangle = arr => {
  const result = [1]
  for (let i = 0; i < arr.length - 1; i++){
    result.push(arr[i] + arr[i + 1])
  }
  result.push(1)
  return result
}

// console.log(triangle([1, 3, 3, 1]))
console.log(pascal(3))
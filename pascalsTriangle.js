// Input: rowIndex = 3
// Output: [1, 3, 3, 1]

// Input: rowIndex = 4
// Output: [1 ,4, 6, 4, 1]

const stepDownward = arr => {
  const result = [1]
  for (let i = 0; i < arr.length - 1; i++){
    result.push(arr[i] + arr[i + 1])
  }
  result.push(1)
  return result
}

const pascalsTriangle = rowIndex => {
  if (rowIndex === 1) return [1, 1]
  let result = [1, 1]
  if (rowIndex > 2){
    while (rowIndex > 1){
      result = stepDownward(result)
      rowIndex -= 1
    }
  }
  return result
}

// console.log(stepDownward([1, 2, 1]))
console.log(pascalsTriangle(4))

// recursive call method
const pascalsTriangle1 = rowIndex => {
  if (rowIndex === 1) return [1, 1]
  return stepDownward(pascalsTriangle1(rowIndex - 1))
}

console.log(pascalsTriangle1(4))

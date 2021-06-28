// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

const matrix = [[1,5,9],[10,11,13],[12,13,15]]
const k = 8
const kthSmallestInMatrix = (matrix, k) => {
  const flatArr = matrix.flat()
  for(let i = 0; i < flatArr.length; i++){
    for(let j = i + 1; j < flatArr.length; j++){
      if (flatArr[i] > flatArr[j]){
        let temp = flatArr[i]
        flatArr[i] = flatArr[j]
        flatArr[j] = temp
      }
    }
  }
  return flatArr[k - 1]
}
console.log(kthSmallestInMatrix(matrix, k))
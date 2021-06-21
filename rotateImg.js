// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

const rotateImg = function(matrix){
  const result = []
  for (let i = 0; i < matrix.length; i++){
    let subArr = [];
    for (let j = matrix.length - 1; j >= 0; j--){
      subArr.push(matrix[j][i])
    }
    result.push(subArr)
  }
  return result
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotateImg(matrix))
const matrix1 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
console.log(rotateImg(matrix1))
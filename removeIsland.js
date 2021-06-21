const input = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
]

const edge = [];
const removeIsland = function(matrix){
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix.length; j++){
      if (i === 0 || j === 0 || i === matrix.lengt - 1 || j === matrix.lengt - 1){
        edge.push(j.toString() + i.toString())
      }
    }
  }
  console.log(edge)
  touchEdge(edge, matrix)
  console.log(edge)
}

const adjcent = function(matrix, x, y){
  const neighbours = [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]]
  const result = []
  const edge = matrix.length
  for (const neighbour of neighbours){
    if ((neighbour[0] >= 0 && neighbour[1] >= 0) && (neighbour[0] < edge && neighbour[1] < edge)){
      let surrounding = neighbour[0].toString() + neighbour[1].toString()
      result.push(surrounding)
    }
  }
  return result
}

const touchEdge = function(arr, matrix){
  let found = false
  for (const element of arr){
    if (matrix[element[0]][element[1]] === 1){
      const neighbours = adjcent(matrix, Number(element[0]), Number(element[1]))
      for (const neighbour of neighbours){
        let x = Number(neighbour[0])
        let y = Number(neighbour[1])
        if (matrix[x][y] === 1 && !edge.includes(neighbour)){
          found = true
          edge.push(neighbour)
        }
      }
    }
  }
  return found
}

removeIsland(input)

// const nums = [0, 1, 2, 3]
// for (const num of nums){
//   let newNum = 7 - num
//   if ( newNum > 0 && !nums.includes(newNum)){
//     nums.push(newNum)
//   }
// }
// console.log(nums)
// output [ 0, 1, 2, 3, 7, 6, 5, 4 ]

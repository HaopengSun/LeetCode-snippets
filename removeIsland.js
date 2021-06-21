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
      if (i === 0 || j === 0 || i === 5 || j === 5){
        edge.push(j.toString() + i.toString())
      }
    }
  }
  console.log(edge)
  touchEdge(edge, matrix)
  console.log(edge)
}

const adjcent = function(x, y){
  const neighbours = [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]]
  const result = []
  for (const neighbour of neighbours){
    if ((neighbour[0] >= 0 && neighbour[1] >= 0) && (neighbour[0] < 6 && neighbour[1] < 6)){
      let surrounding = neighbour[0].toString() + neighbour[1].toString()
      result.push(surrounding)
    }
  }
  return result
}

const touchEdge = function(arr, matrix){
  let found = false
  for (const element of arr){
    // console.log(matrix[element[0]][element[1]])
    if (matrix[element[0]][element[1]] === 1){
      const neighbours = adjcent(Number(element[0]), Number(element[1]))
      for (const neighbour of neighbours){
        let x = Number(neighbour[0])
        let y = Number(neighbour[1])
        console.log(matrix[x][y], x, y, !edge.includes(neighbour))
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
// console.log(adjcent(0, 0))


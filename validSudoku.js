// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false

const validSudoku = function(arr){
  for (let i = 0; i < arr.length; i++) {
    if (!sameElement(arr[i])) return false
    let verticalArr = []
    for (let j = 0; j < arr.length; j++) {
      verticalArr.push(arr[j][i])
      if (!sameElement(verticalArr)) return false
    }
  }
  for (let i = 0; i < arr.length; i += 3) {
    for (let j = 0; j < arr.length; j += 3){
      if (!nineCells(i, j, arr)) return false
    }
  }
  return true
}

const sameElement = function (arr){
  const arrayWithoutDots = [];
  for (const element of arr){
    if (element !== '.'){
      arrayWithoutDots.push(element)
    }
  }
  const same = [];
  for (const element of arrayWithoutDots){
    if (same.includes(element)){
      return false
    } else {
      same.push(element)
    }
  }
  return true
}

const nineCells = function(x, y, arr){
  const cells = []
  for(let i = x; i < 3; i++){
    for(let j = y; j < 3; j++){
      cells.push(arr[i][j])
    }
  }
  return sameElement(cells)
}

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(validSudoku(board))

const board1 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(validSudoku(board1))
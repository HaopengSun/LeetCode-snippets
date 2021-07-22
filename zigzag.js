// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"

const s = "PAYPALISHIRING"
const numRows = 4

const zigzag = (s, numRows) => {
  const matrix = []
  for (let i = 0; i < numRows; i++) matrix.push([s[i]])
  let curr = numRows - 1
  let direction = -1
  for (let j = numRows - 1; j < s.length; j++){
    matrix[curr].push(s[j])
    curr += direction
    if (curr === 0 || curr === 3) direction *= -1
  }
  console.log(matrix.flat().join(''))
}

zigzag(s, numRows)
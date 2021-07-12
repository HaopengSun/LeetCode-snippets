// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

const reducer = (accumulator, currentValue) => Math.pow(accumulator, 2) + Math.pow(currentValue, 2);
const happyNum = n => {
  let num = String(n).split('').map(str => Number(str)).reduce(reducer)
  return num !== 1 ? happyNum(num) : true
}

console.log(happyNum(19))
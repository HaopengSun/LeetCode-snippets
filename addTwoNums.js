// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const transferToNum = arr => {
  let n = arr.length - 1
  let result = 0
  arr.forEach(num => {
    result += num * Math.pow(10, n)
    n -= 1
  })
  return result
}

const addTwoNums = (l1, l2) => {
  const conbinationStr = (transferToNum(l1) + transferToNum(l2)).toString().split('')
  const result = []
  for (let i = conbinationStr.length - 1; i >= 0; i--){
    result.push(Number(conbinationStr[i]))
  }
  console.log(result)
}

// const l1 = [2,4,3]
// const l2 = [5,6,4]
const l1 = [9,9,9,9,9,9,9]
const l2 = [9,9,9,9]
addTwoNums(l1, l2)
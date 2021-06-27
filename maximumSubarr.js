// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

const reducer = (a, b) => a * b

const maximumSubarray = arr => {
  let maximum = 0
  for (let i = 0; i < arr.length; i++){
    for (let j = i; j < arr.length; j++){
      if (i === 0 && j === arr.length - 1) continue
      let current = arr.slice(i, j + 1).reduce(reducer)
      if (current > maximum) maximum = current
    }
  }
  return maximum
}

const nums = [2,3,-2,4]
console.log(maximumSubarray(nums))
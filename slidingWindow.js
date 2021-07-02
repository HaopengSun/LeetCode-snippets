// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

const maxi = arr => {
  let maximum = 0
  arr.forEach(num => {
    if (num > maximum) maximum = num
  })
  return maximum
}

// console.log(maxi([1, 2, 3]))

const slidingWindow = (nums, k) => {
  const result = []
  for (let i = 0; i < nums.length - k + 1; i++){
    let current = nums.slice(i, i + k)
    result.push(maxi(current))
  }
  return result
}

const nums = [1,3,-1,-3,5,3,6,7]
const k = 3
console.log(slidingWindow(nums, k))
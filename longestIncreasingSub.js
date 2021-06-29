// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Input: nums = [0,1,0,3,2,3]
// Output: 4

const longestIncreasingSubArr = nums => {
  let result = 0
  for (let i = 0; i < nums.length - 1; i++){
    let remain = nums.slice(i + 1, nums.length)
    const lengthOfElement = longest(nums[i], remain)
    if (lengthOfElement > result) result = lengthOfElement
  }
  return result
}

const longest = (num, arr) => {
  const bigger = arr.filter(e => e > num)
  const combine = [num, ...bigger]
  const result = []
  for (let i = 0; i < combine.length - 1; i++){
    if (combine[i] < combine[i + 1]){
      result.push(combine[i])
      result.push(combine[i + 1])
      i += 2
    }
  }
  return result.length
}

const nums = [10,9,2,5,3,7,101,18]
console.log(longestIncreasingSubArr(nums))
const nums1 = [0,1,0,3,2,3]
console.log(longestIncreasingSubArr(nums1))
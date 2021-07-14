// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const rotateArr = (nums, k) => {
  for (let i = 1; i <= 3; i++){
    let lastNum = nums.pop()
    nums.unshift(lastNum)
  }
  return nums
}

const nums = [1,2,3,4,5,6,7]
const k = 3
rotateArr(nums, k)

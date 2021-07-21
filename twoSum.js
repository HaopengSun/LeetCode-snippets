// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++){
    for (let j = i + 1; j < nums.length; j++){
      if (nums[i] + nums[j] === target) return [nums[i], nums[j]]
    }
  }
}

const nums = [2,7,11,15]
const target = 9
console.log(twoSum(nums, target))

const nums1 = [3,2,4]
const target1 = 6
console.log(twoSum(nums1, target1))
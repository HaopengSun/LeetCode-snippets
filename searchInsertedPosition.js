// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

const searchInsertedPosition = function(nums, target) {
  for (let i = 0; i < nums.length; i++){
    if(nums[i] == target) return i;
    if(nums[i] < target && nums[i + 1] > target) return i + 1;
  }
}

const nums1 = [1,3,5,6]
const target1 = 5

const nums2 = [1,3,5,6]
const target2 = 2

const nums3 = [1,3,5,6]
const target3 = 7

console.log(searchInsertedPosition(nums1, target1))
console.log(searchInsertedPosition(nums2, target2))
console.log(searchInsertedPosition(nums3, target3))
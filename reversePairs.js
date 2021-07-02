// Input: nums = [1,3,2,3,1]
// Output: 2

// Input: nums = [2,4,3,5,1]
// Output: 3

const reversePairs = nums => {
  let amount = 0
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      if (nums[i] > 2 * nums[j]) amount += 1
    }
  }
  return amount
}

const nums = [1,3,2,3,1]
console.log(reversePairs(nums))
const nums1 = [2,4,3,5,1]
console.log(reversePairs(nums1))

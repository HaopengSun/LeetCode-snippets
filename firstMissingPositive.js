// Input: nums = [1,2,0]
// Output: 3

// Input: nums = [3,4,-1,1]
// Output: 2

// Input: nums = [7,8,9,11,12]
// Output: 1

const firstMissingPositive = function(nums){
  const positive = nums.filter(e => e > 0)
  const sortedPositive = positive.sort()
  if (!sortedPositive.includes(1)) return 1
  for (let i = 1; i < sortedPositive.length - 1; i++){
    if (sortedPositive[i] - sortedPositive[i - 1] !== 1) return sortedPositive[i] - 1
  }
  return sortedPositive[sortedPositive.length - 1] + 1
}

const nums1 = [1,2,0]
const nums2 = [3,4,-1,1]
const nums3 = [7,8,9,11,12]

console.log(firstMissingPositive(nums1))
console.log(firstMissingPositive(nums2))
console.log(firstMissingPositive(nums3))
// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

const sumTuple = (nums1, nums2, nums3, nums4) => {
  let result = 0
  for (const num1 of nums1){
    for (const num2 of nums2){
      for(const num3 of nums3){
        for (const num4 of nums4){
          if (num1 + num2 + num3 + num4 === 0) result++
        }
      }
    }
  }
  return result
}

const nums1 = [1,2]
const nums2 = [-2,-1]
const nums3 = [-1,2]
const nums4 = [0,2]

console.log(sumTuple(nums1, nums2, nums3, nums4))
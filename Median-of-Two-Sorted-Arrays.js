// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

nums1 = [1, 3]
nums2 = [2, 4]

const median = function(nums1, nums2){
  for (const num of nums2){
    nums1.push(num)
  }
  const arr = nums1.sort()
  return arr.length % 2 === 1 ? arr[(arr.length - 1) / 2] : (arr[arr.length / 2] + arr[arr.length / 2] - 1) / 2
}

console.log(median(nums1, nums2))
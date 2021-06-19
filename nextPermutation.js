// Input: nums = [1,2,3]
// Output: [1,3,2]

// Input: nums = [3,2,1]
// Output: [1,2,3]

// Input: nums = [1,1,5]
// Output: [1,5,1]

const nextPermutation = function(arr){
  for (let i = arr.length - 1; i > 0; i--){
    if (arr[i] > arr[i - 1]){
      let result = arr.splice(i - 1, 2).reverse()
      return [...arr, result].flat()
    }
  }
  return arr.sort();
}

let nums1 = [1,2,3]
let nums2 = [3,2,1]
let nums3 = [1,1,5]
console.log(nextPermutation(nums1))
console.log(nextPermutation(nums2))
console.log(nextPermutation(nums3))
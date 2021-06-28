// Input: nums = [1,2,3,4,5]
// Output: true

// Input: nums = [5,4,3,2,1]
// Output: false

// Input: nums = [2,1,5,0,4,6]
// Output: true

const triplet = arr => {
  for (let i = 0; i < arr.length - 2; i++){
    if(arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]) return true
  }
  return false
}

const nums = [1,2,3,4,5]
console.log(triplet(nums))
const nums1 = [5,4,3,2,1]
console.log(triplet(nums1))
const nums2 = [2,1,5,0,4,6]
console.log(triplet(nums2))
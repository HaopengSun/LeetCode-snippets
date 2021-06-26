// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Input: nums = [5,4,-1,7,8]
// Output: 23

const maximumSubarray = function(arr){
  const reducer = (a, b) => a + b
  let maximum = 0
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length && j + i + 1 <= arr.length; j++){
      let sum = arr.slice(j, j + i + 1).reduce(reducer)
      if (sum > maximum) maximum = sum
    }
  }
  return maximum
}

const nums = [5,4,-1,7,8]
console.log(maximumSubarray(nums))

const nums1 = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maximumSubarray(nums1))
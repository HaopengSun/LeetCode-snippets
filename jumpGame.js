// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Input: nums = [3,2,1,0,4]
// Output: false

const jumpGame = function(arr){
  for (let i = 0; i < arr.length; i++){
    let nextStep = false
    for (let j = i + 1; j <= i + arr[i] && j < arr.length; j++){
      if (arr[i] <= arr[j]) {
        nextStep = true
        i = j
        continue
      }
    }
    if (!nextStep) return false
  }
  return true
}

const nums = [2,3,1,1,4]
console.log(jumpGame(nums))
const nums1 = [3,2,1,0,4]
console.log(jumpGame(nums1))
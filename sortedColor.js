// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

const nums = [2,0,2,1,1,0]

for (let i = 0; i < nums.length; i++) {
  for (let j = i; j < nums.length; j++){
    if (nums[i] >= nums[j]){
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
  }
}

console.log(nums)
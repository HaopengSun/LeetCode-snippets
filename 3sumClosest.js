// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

const sumClosest = (nums, target) => {
  let closest = nums[0] + nums[1] + nums[2] - target
  for (let i = 0; i < nums.length - 2; i++){
    for (let j = i + 1; j < nums.length - 1; j++){
      for (let k = j + 1; k < nums.length; k++){
        let sum = nums[i] + nums[j] + nums[k]
        // let distance = sum >= target ? sum - target : target - sum
        let distance = Math.abs(sum - target)
        if (distance < closest) closest = distance
      }
    }
  }
  console.log(closest)
}

const nums = [-1,2,1,-4]
const target = 1
sumClosest(nums, target)
// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]

const smallestAccountValueAfter = nums => {
  const result = []
  for (let i = 0; i < nums.length - 1; i++){
    let account = 0
    for (let j = i + 1; j < nums.length; j++){
      if (nums[i] > nums[j]) account++
    }
    result.push(account)
  }
  result.push(0)
  return result
}

const nums = [5,2,6,1]
console.log(smallestAccountValueAfter(nums))
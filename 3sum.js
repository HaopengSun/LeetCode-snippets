// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

const equalArr = (arr1, arr2) => {
  const sortedArr1 = arr1.sort()
  const sortedArr2 = arr2.sort()
  for (let i = 0; i < arr1.length; i++){
    if (sortedArr1[i] !== sortedArr2[i]) return false
  }
  return true
}

const sum = nums => {
  const results = []
  for (let i = 0; i < nums.length - 2; i++){
    for (let j = i + 1; j < nums.length - 1; j++){
      for (let k = j + 1; k < nums.length; k++){
        if (nums[i] + nums[j] + nums[k] === 0) {
          if (results.length > 0) {
            let isExisting = false
            results.forEach(result => {
              if (equalArr([nums[i], nums[j], nums[k]], result)) isExisting = true
            })
            if (!isExisting) results.push([nums[i], nums[j], nums[k]])
          } else {
            results.push([nums[i], nums[j], nums[k]])
          }
        }
      }
    }
  }
  console.log(results)
}

const nums = [-1,0,1,2,-1,-4]
sum(nums)

// const arr1 = [-1, 0, 1]
// const arr2 = [1, 0, -1]
// console.log(equalArr(arr1, arr2))
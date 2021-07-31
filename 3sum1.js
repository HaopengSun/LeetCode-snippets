// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

const tripleSum = arr => {
  const combination = {}
  for (let i = 0; i < arr.length; i++){
    if (combination[arr[i]]){
      combination[arr[i]].push(i)
    } else {
      combination[arr[i]] = [i]
    }
    if (i + 1 < arr.length){
      for (let j = i + 1; j < arr.length; j++){
        let plus = arr[i] + arr[j]
        let comb = [i, j]
        if (combination[plus]){
          combination[plus].push(comb)
        } else {
          combination[plus] = [comb]
        }
      }
    }
  }
  console.log(combination)
}

const nums = [-1,0,1,2,-1,-4]
tripleSum(nums)
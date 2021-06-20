// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

const positionSortedArray = function(arr, num){
  const result = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === num){
      result.push(i)
    }
  }
  return result.length !== 0 ? [result[0], result[result.length - 1]] : [-1, -1]
}

const nums = [5,7,7,8,8,10]
const target = 6

console.log(positionSortedArray(nums, target))
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

const removeElement = function(arr, val){
  const resultArr = arr.filter(e => e !== val)
  const k = arr.length - resultArr.length
  for (let i = 0; i < k; i++) {
    resultArr.push('_')
  }
  return `output: ${k}, [${resultArr}]`
}

nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val))
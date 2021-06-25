// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

const subsets = function(nums) {
  const subsets = [[]]
  const generate = (nums) => {
    for(let i = 0; i < nums.length; i++){
      const size = subsets.length
      for(let j = 0; j < size; j++){
        const current = subsets[j]
        const newSub = [...current, nums[i]]
        subsets.push(newSub)
      }
    }
  }
  generate(nums)
  return subsets
}

const nums = [1,2,3]
console.log(subsets(nums))

// []
// [], [1]
// [], [1], [2], [1, 2]
// [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]
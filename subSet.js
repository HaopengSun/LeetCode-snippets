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

const reducer = (accumulator, currentValue) => accumulator.toString() + currentValue.toString()
const setSets = []
const subSet = function(arr, current){
  arr.map(element => {
    if (element){
      let newResult = [...current, element]
      if (!setSets.includes(newResult.sort().reduce(reducer))) setSets.push(newResult.sort().reduce(reducer).toString())
      let newArr = arr.filter(e => e !== element)
      subSet(newArr, newResult)
    }
  })
}

subSet(nums, [])
const result = [[]]
setSets.map(letter => result.push(letter.split('').map(num => Number(num))))
console.log(result)

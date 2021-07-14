// Input: nums = [10,2]
// Output: "210"

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

const largestNum = nums => {
  const largest = {}
  const largestIndividuals = []
  let result = ''
  nums.forEach(element => {
    let strs = element.toString().split('')
    let individualNum = strs.map(num => Number(num))
    let largestIndividual = Math.max(...individualNum)
    if (!largest[largestIndividual]) largest[largestIndividual] = []
    largest[largestIndividual].push(element)
  });

  for(let key in largest) largestIndividuals.push(Number(key))

  console.log(largest, largestIndividuals)

  for (let i = largestIndividuals.length - 1; i >= 0; i--){
    for(let key in largest){
      if (Number(key) === largestIndividuals[i]){
        largest[key].sort().forEach(num => result += num.toString())
      }
    }
  }

  console.log(result)
}


let nums = [30, 3, 34, 5, 9]
largestNum(nums)

nums = [10,2]
largestNum(nums)

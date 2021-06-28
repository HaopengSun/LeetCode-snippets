// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

const frequentElement = (arr, k) => {
  const frequent = {}
  arr.forEach(element => {
    let exists = false
    for (const key in frequent) {
      if (Number(key) === element) {
        frequent[key] += 1
        exists = true
      }
    }
    if (!exists) frequent[element] = 1
  })
  const result = []
  for (const key in frequent){
    if (frequent[key] >= k) result.push(key)
  }
  return result.length
}

const nums = [1,1,1,2,2,3]
const k = 2
console.log(frequentElement(nums, k))
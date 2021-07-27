const howSum = (target, nums) => {
  const arr = Array(target + 1).fill(null)
  arr[0] = ''
  for (let i = 0; i < target + 1; i++){
    if (arr[i] !== null) {
      for (let num of nums){
        if (num + i < target + 1) arr[num + i] = arr[i] + num.toString()
      }
    }
  }
  console.log(arr)
  if (arr[target]) return arr[target].split('').map(num => Number(num))
}

// console.log(howSum(6, [2, 3, 4]))

const howSum1 = (target, nums) => {
  const arr = Array(target + 1).fill(null)
  arr[0] = []
  for (let i = 0; i < target + 1; i++){
    if (arr[i] !== null) {
      for (let num of nums){
        if (num + i < target + 1) {
          arr[num + i] = [...arr[i], num]
        }
      }
    }
  }
  return arr[target] ? arr[target] : false
}

console.log(howSum1(6, [2, 3, 4]))

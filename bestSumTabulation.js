const bestSum = (target, nums) => {
  const table = Array(target + 1).fill(null)
  table[0] = []
  for (let i = 0; i < table.length; i++){
    if (table[i] !== null){
      for (let num of nums){
        const combination = [...table[i], num]
        if (i + num < table.length){
          if (!table[i + num] || combination.length < table[i + num].length) {
            table[i + num] = combination
          }
        }
      }
    }
  }
  return table[target]
}

console.log(bestSum(100, [2, 3, 4, 25]))
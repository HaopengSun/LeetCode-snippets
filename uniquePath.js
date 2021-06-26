// Input: m = 3, n = 7
// Output: 28

// Input: m = 3, n = 2
// Output: 3

const uniquePath = function(m, n){
  let paths = 0
  const nextStep = function(current){
    const next = []
    if (current[0] < m - 1) next.push([current[0] + 1, current[1]])
    if (current[1] < n - 1) next.push([current[0], current[1] + 1])
    if (current[0] === m - 1 && current[1] === n - 1) return
    return next
  }
  const uniquePath = function(currentPosition){
    nextStep(currentPosition).map(position => {
      if (position[0] < m - 1 || position[1] < n - 1) {
        uniquePath(position)
      } else {
        paths += 1
      }
    })
  }
  uniquePath([0, 0])
  return paths
}

console.log(uniquePath(3, 7))
// Input: nestedList = [[1,1],2,[1,1]]
// Output: [1,1,2,1,1]

// Input: nestedList = [1,[4,[6]]]
// Output: [1,4,6]

const flattenArr = []

const flatten = (arr) => {
  arr.forEach(element => {
    if ((typeof element) === 'number') {
      flattenArr.push(element)
    } else {
      flatten(element)
    }
  })
}

const nestedList = [1,[4,[6]]]
// const nestedList = [[1,1],2,[1,1]]
flatten(nestedList)
console.log(flattenArr)


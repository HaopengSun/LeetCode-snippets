let count = 0
const canConstruct = (target, wordBank) => {
  if (target === '') return true

  for (let word of wordBank){
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank)) count++
    }
  }

}

canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])
console.log(count)

let count1 = 0
const canConstruct1 = (target, wordBank, memo={}) => {
  if (target === '') return true
  if (memo[target]) {
    count1++
    return
  }

  for (let word of wordBank){
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      memo[target] = canConstruct1(suffix, wordBank, memo)
      if (memo[target]) count1++
    }
  }

}

canConstruct1('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])
console.log(count1)

const countConstruct = (target, wordBank) => {
  if (target === '') return 1

  let count = 0

  for (let word of wordBank){
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      count += countConstruct(suffix, wordBank)
    }
  }

  return count
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef']))
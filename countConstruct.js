let count = 0
const canConstruct = (target, wordBank) => {
  if (target === '') return true

  for (let word of wordBank){
    // to ensure the selected words in the wordBank are prefix to the target
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank)) count++
    }
  }

}

canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])
console.log(count)
const canConstruct = (target, words) => {
  if (target){
    const subWords = allConbination(target)
    for (let word of words){
      if (subWords.includes(word)){
        if (word === target) return true
        if (canConstruct(remainer(word, target), words)) return true
      }
    }
  }
  return false
}

const remainer = (prefix, word) => {
  let i = 0
  let wordArr = word.split('')
  while(prefix[i] === wordArr[0]){
    wordArr.shift()
    i += 1
  }
  return wordArr.join('')
}

// console.log(remainer('abc', 'abcdef'))

const allConbination = word => {
  const result = []
  let subWord = ''
  for(let letter of word){
    subWord += letter
    result.push(subWord)
  }
  return result
}

// console.log(allConbination('abcdef'))


// console.log(canConstruct('abcdew', ['ab', 'abc', 'cd', 'def', 'abcd']))

// slice can also be used in string and indexOf is used to ensure the selected words are the prefix of the target
const canConstruct1 = (target, wordBank) => {
  if (target === '') return true

  for (let word of wordBank){
    // to ensure the selected words in the wordBank are prefix to the target
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      if (canConstruct1(suffix, wordBank)) return true
    }
  }
  return false
}

// console.log(canConstruct1('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))


const canConstruct2 = (target, wordBank, memo = {}) => {

  console.log(memo)

  if (target === '') return true
  if (target in memo) return memo[target]

  for (let word of wordBank){
    // to ensure the selected words in the wordBank are prefix to the target
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      memo[word] = true
      if (canConstruct2(suffix, wordBank, memo)) return true
    }
  }

  return false
}

console.log(canConstruct2('abcdew', ['ab', 'abc', 'cd', 'def', 'abcd']))
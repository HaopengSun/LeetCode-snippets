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


console.log(canConstruct('abcdew', ['ab', 'abc', 'cd', 'def', 'abcd']))
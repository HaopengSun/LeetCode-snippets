const countConstruct = (target, words) => {
  const table = Array(target.length + 1).fill(0)
  table[0] = 1
  for (let i = 0; i < table.length; i++){
    if (table[i] > 0){
      for (let word of words){
        if (word[0] = target[i]){
          if (word.length + i < table.length) table[word.length + i] += 1
        }
      }
    }
  }
  console.log(table)
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))

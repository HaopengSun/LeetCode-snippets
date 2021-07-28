const canConstruct = (target, words) => {
  const table = Array(target.length + 1).fill(false)
  table[0] = true
  // console.log(table)
  for (let i = 0; i < table.length; i++){
    if (table[i]){
      for (let word of words){
        if (word[0] === target[i]){
          if (i + word.length < table.length) table[i + word.length] = true
        }
      }
    }
  }
  return table[table.length - 1]
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
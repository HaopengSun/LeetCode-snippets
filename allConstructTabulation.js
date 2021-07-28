const allConstruct = (target, words) => {
  const table = Array(target.length + 1).fill(false)
  table[0] = []
  for (let i = 0; i < table.length; i++){
    if (table[i]) {
      for (let word of words) {
        if (target[i] === word[0]){
          if (word.length + i < table.length){
            if (table[word.length + i]){
              for (let element of table[i]){
                table[word.length + i].push([...element, i + word.length])
              }
            } else {
              table[word.length + i] = [[...table[i], i + word.length]]
            }
          }
        }
      }
    }
  }
  return table[table.length - 1].map(element => element.flat())
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef']))

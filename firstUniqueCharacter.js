// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

// const firstUniqueCharacter = function(str){
//   const arrLetter = str.split('')
//   const uniqueLetter = []
//   const repeatLetter = []
//   arrLetter.forEach(letter => {
//     if (uniqueLetter.includes(letter)) {
//       repeatLetter.push(letter)
//     } else {
//       uniqueLetter.push(letter)
//     }
//   })
//   for(let i = 0; i < uniqueLetter.length; i++){
//     if (!repeatLetter.includes(uniqueLetter[i])) return i
//   }
//   return -1
// }

const firstUniqueCharacter = function(str){
  for (let i = 0; i < str.length; i++){
    let found = false
    for (let j = 0; j < str.length; j++){
      if (i !== j && str[i] === str[j]) found = true
    }
    if (!found) return i
  }
  return -1
}

const str = "leetcode"
console.log(firstUniqueCharacter(str))
const str1 = "loveleetcode"
console.log(firstUniqueCharacter(str1))
const str2 = "aabb"
console.log(firstUniqueCharacter(str2))
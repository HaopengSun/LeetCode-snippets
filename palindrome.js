// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// 0 1 2 3 4 5 // 6

const str = "A man, a plan, a canal: Panama"
// const str = 'abcde'

const palindrome = str => {
  const revisedWord = str.split('').filter(char => /[a-zA-Z]/.test(char)).join('').toLowerCase();
  let index
  if(revisedWord.length % 2 !== 0){
    index = (revisedWord.length - 1) / 2 - 1
  } else {
    index = (revisedWord.length) / 2 - 1
  }
  while (index >= 0){
    if (revisedWord[index] !== revisedWord[revisedWord.length - 1 - index]) return false
    index -= 1
  }
  return true
}

console.log(palindrome(str))
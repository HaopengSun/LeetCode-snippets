// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false
// Input: s = "([)]"
// Output: false

const parenthesis = {
  '(': ')',
  '[': ']',
  '{': '}',
}
const valid = ['(', '{', '[']
const s = "()[]{}"
const l = "(]"
const k = "([)]"

const valid_parenthesis = function (str){
  for (let i = 0; i < str.length; i++) {
    if (valid.includes(str[i]) && str[i + 1] !== parenthesis[str[i]]) {
      i += 1
      return false
    }
  }
  return true
}

console.log(valid_parenthesis(s))
console.log(valid_parenthesis(l))
console.log(valid_parenthesis(k))
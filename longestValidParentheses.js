// Input: s = "(()"
// Output: 2

// Input: s = ")()())"
// Output: 4

// Input: s = ""
// Output: 0

const longestValidParentheses = function(str){
  let result = 0;
  const parenthesis = {'(': ')'}
  for(let i = 0; i < str.length; i++){
    if(str[i] === "(" && str[i + 1] === parenthesis["("]){
      i += 1
      result += 2
    }
  }
  return result
}

str1 = "(()"
str2 = ")()())"

console.log(longestValidParentheses(str1))
console.log(longestValidParentheses(str2))
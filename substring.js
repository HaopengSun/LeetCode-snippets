// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]

const substring = function(str, arr){
  const result = []
  const concatination = [arr[0] + arr[1], arr[1] + arr[0]]
  for (let i = 0; i < str.length - (arr[0] + arr[1]).length; i++){
    if (concatination.includes(str.slice(i, i + (arr[0] + arr[1]).length))){
      result.push(i)
    } 
  }
  return result
}

const s = "barfoothefoobarman"
const words = ["foo","bar"]
console.log(substring(s, words))

const permArr = []
const usedChars = []
function permute(input) {
  let i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

console.log(permute(words))

const nums = [1, 2]
const permuratedArr = []
const permutation = function(prefix, words){
  for (let i = 0; i < words.length; i++){
    const pre = prefix + words.slice(i, i + 1)[0]
    const remainArr = words.filter(e => e !== words.slice(i, i + 1)[0])
    if (remainArr.length !== 0) {
      permutation(pre, remainArr)
    } else {
      permuratedArr.push(pre)
    }
  }
}

permutation('', nums)
console.log(permuratedArr)
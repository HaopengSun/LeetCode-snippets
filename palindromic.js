// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

const palindromic = str => {
  let result = ''
  for (let i = 1; i < str.length - 1; i++){
    let palindromicStr = [str[i]]
    let left = i - 1
    let right = i + 1
    while (left >= 0 && right < str.length - 1){
      if (str[left] === str[right]){
        palindromicStr.unshift(str[left])
        palindromicStr.push(str[right])
        left -= 1
        right += 1
      }
    }
    let semiResult = palindromicStr.join('')
    if (semiResult.length > result.length) result = semiResult
  }
  console.log(result)
}

const s = "babad"
palindromic(s)

const palindromic1 = str => {
  let result = ''
  for (let i = 1; i < str.length - 1; i++){
    let palindromicStr = []
    let left = i - 1
    let right = i
    while (left >= 0 && right < str.length - 1){
      if (str[left] === str[right]){
        palindromicStr.unshift(str[left])
        palindromicStr.push(str[right])
        left -= 1
        right += 1
      } else {
        break
      }
    }
    let semiResult = palindromicStr.join('')
    if (semiResult.length > result.length) result = semiResult
  }
  console.log(result)
}

const s1 = "cbbd"
palindromic1(s1)
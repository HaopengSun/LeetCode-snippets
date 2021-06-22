const mappings = {};
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
for (let i = 0; i < letters.length; i++) {
  mappings[letters[i]] = (i + 1).toString()
}
// console.log(mappings)

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

const decodeWays = function(str){
  const result = []
  let individual = ''
  str.split('').forEach((letter) => individual += decode(letter))
  result.push(individual)

  let double = ''
  for (let i = 0; i < str.length; i += 2){
    double += (i + 1 < str.length ? decode(str[i]+ str[i + 1]) : decode(str[i]))
  }
  result.push(double)

  let double1 = decode(str[0])
  for (let i = 1; i < str.length; i += 2){
    double1 += (i + 1 < str.length ? decode(str[i]+ str[i + 1]) : decode(str[i]))
  }
  result.push(double1)

  console.log(result)
}

const decode = function(str){
  for (const key in mappings){
    if (str === mappings[key]){
      return key
    }
  }
}

const str = "226"
decodeWays(str)
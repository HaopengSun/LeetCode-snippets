const str = "Hello World!"

const camelcase = function(str){
  const wordArr = str.split(' ');
  let result = '';
  for (let i = 0; i < wordArr.length; i++){
    let letters = ''
    for (const letter of wordArr[i]){
      if (letter.match(/[a-z]/i)) letters += letter
    }
    if (i === 0){
      result += letters.toLowerCase();
    } else {
      result += letters
    }
  }
  return result
}

module.exports = camelcase;
// console.log(camelcase(str))
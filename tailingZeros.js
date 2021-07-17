const tailingZeros = n => {
  let result = 1
  let zeros = 0
  while(n > 0){
    result *= n;
    n -= 1;
  }
  let str = result.toString().split('')
  let lastNum = str.pop()
  while (lastNum === '0') {
    zeros += 1
    lastNum = str.pop()
  }
  return zeros
}

tailingZeros(10)
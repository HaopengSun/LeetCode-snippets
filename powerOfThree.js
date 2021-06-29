const powerOfThree = num => {
  let powerOfThree = 0
  let i = 1
  while(powerOfThree < num){
    powerOfThree = Math.pow(3, i)
    i++
  }
  return powerOfThree === num
}

console.log(powerOfThree(9))
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

const countPrimes = n => {
  let result = []
  while(n > 1){
    let prime = true
    for (let i = 2; i < n; i++){
      if(n % i) continue
      // console.log(n, i, n % i)
      prime = false
    }
    if (prime) result.push(n)
    n -= 1
  }
  console.log(result)
}

countPrimes(10)
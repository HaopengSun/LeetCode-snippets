// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

const coins = [1,2,5]
const amount = 11
const result = []
const change = (coins, amount) => {
  let division = Math.floor(amount / coins[coins.length - 1])
  if (amount > coins[coins.length - 1]) {
    let del = coins.splice(coins.length - 1)
    for (let i = 0; i < division; i++) result.push(del[0])
    change(coins, amount - division * del)
  } else if(amount === coins[coins.length - 1]){
    result.push(coins[coins.length - 1])
  } else if (amount < coins[coins.length - 1] && coins.length > 1){
    coins.splice(coins.length - 1)
    change(coins, amount)
  }
}

change(coins, amount)
console.log(result)
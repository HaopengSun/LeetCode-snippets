// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later,
// as you are engaging multiple transactions at the same time. You must sell before buying again.

const profits = {}

const buyStock = prices => {
  for (let i = 0; i < prices.length - 1; i++){
    profits[i] = []
    for (let j = i + 1; j < prices.length; j++){
      if (prices[j] > prices[i]) helper(i, j + 1, prices, (prices[j] - prices[i]))
    }
  }
}

const helper = (buyDay, index, prices, currProfit) => {
  const nextDays = prices.slice(index)
  console.log(nextDays, currProfit, index)
  if (nextDays.length === 0) profits[buyDay].push(currProfit)
  if (nextDays.length > 0){
    for (let i = 0; i < nextDays.length - 1; i++){
      let found = false
      for (let j = i + 1; j < nextDays.length; j++){
        if (nextDays[j] > nextDays[i]) {
          found = true
          helper(buyDay, j + 3 + buyDay, prices, (nextDays[j] - nextDays[i] + currProfit))
        }
      }
      if (!found) {
        profits[buyDay].push(currProfit)
        continue
      }
    }
  }
}

const prices = [7,1,5,3,6,4]
buyStock(prices)
console.log(profits)

console.log(prices.slice(5))
// 1 3 [ 7, 1, 5, 3, 6, 4 ] 7
// 1 4 [ 7, 1, 5, 3, 6, 4 ] 5
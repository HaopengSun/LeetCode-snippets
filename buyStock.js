// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const buyStock = arr => {
  let maximumProfit = 0
  for (let i = 0; i < arr.length - 1; i++){
    let maximumProfitIndividual = 0
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] > arr[i]){
        let profit = arr[j] - arr[i]
        if (profit > maximumProfitIndividual) maximumProfitIndividual = profit
      }
    }
    if (maximumProfitIndividual > maximumProfit) maximumProfit = maximumProfitIndividual
  }
  return maximumProfit
}

const prices = [7,1,5,3,6,4]
console.log(buyStock(prices))
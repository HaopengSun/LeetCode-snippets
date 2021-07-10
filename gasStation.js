// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

const gas = [1,2,3,4,5]
const cost = [3,4,5,1,2]

const gasStation = (gas, cost) => {
  for (let j = 0; j < gas.length; j++){
    let i = j
    if (gas[i] > cost[i]){
      let remainGas = gas[i]
      let remainLength = gas.length
      while(remainLength > 0){
        if (i + 1 === gas.length){
          remainGas += gas[0] - cost[i]
          i = 0
        } else {
          remainGas += gas[i + 1] - cost[i]
        }
        i += 1
        if (i === j && i > 0) remainGas -= (gas[i] + cost[i - 1])
        if (i === j && i === 0) remainGas -= (gas[i] + cost[cost.length - 1])
        remainLength -= 1
      }
      console.log(remainGas, i)
    }
  }
}

gasStation(gas, cost)
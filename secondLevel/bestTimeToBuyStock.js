var maxProfit = function(prices) {
  let profit = 0 
  let min = Infinity
  for (let i =0 ; i <prices.length ; i++){
    let cur =0 
    if(min>prices[i]){
        min = prices[i]
    }
    cur= prices[i] -min
    if(cur>profit){
        profit = cur
    }
  }  
  return profit
};
console.log(maxProfit([7,1,5,3,6,4]))
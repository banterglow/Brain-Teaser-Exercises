
// var expect = require('chai').expect;
// goods = [name, weight, value]

var knapsack = function (maxWeight, goods) {
  let result = [], weightRemaining = maxWeight;
  // sort by greatest dollar/lb ratio
  goods.sort((a, b) => {
    return b[2] / b[1] - a[2] / a[1];
  });


  for (var i = 0; i < goods.length; i++) {
    //opportunity cost logic
    if (weightRemaining >= goods[i][1]) {
      weightRemaining -= goods[i][1];
      result.push(goods[i]);
    }
  }

  let total = result.reduce((total, val) => { return total + val[2]; }, 0);
  return [total, result];
};

// regular case, should return first two
console.log(knapsack(10, [['silver', 4, 6], ['gold', 5, 10], ['bronze', 3, 2]]));
// gold is extremeley valuable, but taking silver is the better choice here
console.log(knapsack(10, [['silver', 10, 10], ['gold', 1, 5], ['bronze', 3, 2]]));




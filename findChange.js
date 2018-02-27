var countChange = function (money, coins) {
  let combinations = {};

  let findCombinations = (remaining, selected) => {
    for (var i = 0; i < coins.length; i++) {
      if (remaining > coins[i]) {
        findCombinations(remaining - coins[i], [...selected, coins[i]]);
      } else if (remaining === coins[i]) {
        combinations[[...selected, coins[i]].sort().toString()] = true;
      }
    }
  }
  findCombinations(money, []);
  return Object.keys(combinations).length;
}
var uniquePaths = function (m, n) {
  let tryMove = (memo, m, n, current) => {
    if (current[0] === m - 1 && current[1] === n - 1) {
      return 1;
    } else if (!memo[current]) {
      let sum = 0;
      if (current[0] + 1 <= m - 1) {
        sum += tryMove(memo, m, n, [current[0] + 1, current[1]]);
      }
      if (current[1] + 1 <= n - 1) {
        sum += tryMove(memo, m, n, [current[0], current[1] + 1]);
      }
      memo[current] =  sum;
    }
    return memo[current];
  }
  let memo = {};
  return tryMove(memo, m, n, [0, 0]);
};

console.log(uniquePaths(23, 12));

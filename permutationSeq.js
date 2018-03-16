let getPermutation = function (n, k) {
  let result = '';
  let factorial = 1;
  let options = [];
  let block;
  k--;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
    options.push(i.toString());
  }
  while (n > 0) {
    block = Math.floor(k / (factorial / n));
    result += options.splice(block, 1);
    k = k % (factorial / n);
    factorial /= n;
    n--;
  }
  return result;
};
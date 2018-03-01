const bigNumber = require('bigNumber');
function extraLongFactorials(n) {
  let result = new bigNumber(1);
  while (n > 1) {
    result *= n;
    n--;
  }
  return result.valueOf();
}

console.log(extraLongFactorials(25));
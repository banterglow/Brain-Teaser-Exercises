const bigNumber = require('bigNumber.js');
function extraLongFactorials(n) {
  let result = new bigNumber(1);
  while (n > 1) {
    result = result.multipliedBy(n);
    n--;
  }
  return result;
}

console.log(extraLongFactorials(25));
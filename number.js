// number
// string of numbers

// smallest time complexity
// smallest space complexity

// output number of times # occurs in the string. 

let matchNumber = (num, str) => {
  // new regexp
  let target = new RegExp(num, 'g');
  // str.match(regexp), stored in var
  let matches = str.match(target);
  // return var.length
  return matches.length;
}

console.log(matchNumber(5, '54325'));
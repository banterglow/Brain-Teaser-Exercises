function getPINs(observed) {
  let options = [], result = [];
  for (let i = 0; i < observed.length; i++) {
    options.push(getSurroundingNums(observed[i]));
  }
  let addCombos = (opt, current = '', level = 0) => {
    for (var a = 0; a < opt[level].length; a++) {
      if (opt.length - 1 === level) {
        result.push(current + opt[level][a]);
      } else {
        addCombos(opt, current + opt[level][a], level + 1);
      }
    }
  }
  addCombos(options);
  return result;
}

function getSurroundingNums(num) {
  let keypad = [['1', '2', '3'],['4', '5', '6'],['7', '8', '9'],[null, '0', null]];
  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let result = [num], numIndex, x, y;
  for (let i = 0; i < keypad.length; i++) {
    if (keypad[i].includes(num)) {
      numIndex = [i, keypad[i].indexOf(num)];
      break;
    }
  }
  for (let a = 0; a < directions.length; a++) {
    x = numIndex[0] + directions[a][0];
    y = numIndex[1] + directions[a][1];
    if (x >= 0 && x <= 3 && y >= 0 && y <= 3 && keypad[x][y]) {
      result.push(keypad[x][y]);
    }
  }
  return result;
}

getPINs('874')
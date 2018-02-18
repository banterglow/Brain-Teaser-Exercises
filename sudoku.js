let checkComplete = (arr) => {
  let objCounter = {};
  arr.forEach(num => {
    objCounter[num] = objCounter[num] + 1 || 1;
  })
  if (Object.keys(objCounter).map(num => parseInt(num)).sort().join('') !== '123456789') {
    return false;
  }
  return true;
}

function doneOrNot(board) {
  let vertArray, square;
  // horizontal
  for (var a = 0; a < board.length; a++) {
    if (!checkComplete(board[a])) return 'Try again!';
  }
  // vertical
  for (var i = 0; i < board[0].length; i++) {
    vertArray = board.map(row => {
      return row[i];
    })
    if (!checkComplete(vertArray)) return 'Try again!';
  }
  // 3x3 squares
  for (var b = 0; b < board[0].length; b+=3) {
    for (var c = 0; c < board[0].length; c += 3) {
      square = [];
      for (var d = 0; d < 3; d++) {
        for (var e = 0; e < 3; e++) {
          square.push(board[d][e]);
        }
      }
      if (!checkComplete(square)) return 'Try again!';
    }
  }
  return 'Finished!';
}

console.log(doneOrNot([[1, 2, 3, 4, 5, 6, 7, 8, 9],
[2, 3, 4, 5, 6, 7, 8, 9, 1],
[3, 4, 5, 6, 7, 8, 9, 1, 2],
[4, 5, 6, 7, 8, 9, 1, 2, 3],
[5, 6, 7, 8, 9, 1, 2, 3, 4],
[6, 7, 8, 9, 1, 2, 3, 4, 5],
[7, 8, 9, 1, 2, 3, 4, 5, 6],
[8, 9, 1, 2, 3, 4, 5, 6, 7],
[9, 1, 2, 3, 4, 5, 6, 7, 8]]))

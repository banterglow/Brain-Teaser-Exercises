let checkComplete = (arr) => {
  let objCounter = {};
  arr.forEach(num => {
    objCounter[num] = objCounter[num] + 1 || 1;
  })
  let newArr = Object.keys(objCounter).map(num => parseInt(num)).sort();
  if (newArr.length !== 9) return false;
  for (var i = 1; i <= 9; i++) {
    if (newArr[i - 1] !== i) {
      return false;
    }
  }
  return true;
}

function doneOrNot(board) {
  // horizontal
  for (var a = 0; a < board.length; a++) {
    if (!checkComplete(board[a])) {
      return 'Try again!';
    }
  }
  // vertical
  let vertArray;
  for (var i = 0; i < board[0].length; i++) {
    vertArray = board.map(row => {
      return row[i];
    })
    if (!checkComplete(vertArray)) {
      return 'Try again!';
    }
  }
  // 3x3 squares
  let square;
  for (var b = 0; b < board[0].length; b+=3) {
    for (var c = 0; c < board[0].length; c += 3) {
      square = [];
      for (var d = 0; d < 3; d++) {
        for (var e = 0; e < 3; e++) {
          square.push(board[d][e]);
        }
      }
      if (!checkComplete(square)) {
        return 'Try again!';
      }
      // square = [board[b][c], board[b][c + 1], board[b][c+2], board[b+1][c], board[b+1][c+1], board[b+1][c+2], board[b+2][c], board[b+2][c+1], board[b+2][c+2]]
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

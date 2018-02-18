let checkComplete = (arr) => {
  let objCounter = {};
  arr.forEach(num => {
    objCounter[num] = objCounter[num] + 1 || 1;
  })
  let newArr = Object.keys(objCounter).map(num => parseInt(num)).sort();
  if (newArr.length !== 9) return false;
  console.log(newArr)
  for (var i = 1; i <= 9; i++) {
    if (newArr[i - 1] !== i) {
      return false;
    }
  }
  return true;
}

function doneOrNot(board) {
  for (var a = 0; a < board.length; a++) {
    if (!checkComplete(board[a])) {
      return 'Try again!';
    }
  }
  let vertArray;
  for (var i = 0; i < board[0].length; i++) {
    vertArray = board.map(row => {
      return row[i];
    })
    if (!checkComplete(vertArray)) {
      return 'Try again!';
    }
  }
  return 'Finished!';
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]))

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 8, 5, 3, 4, 9],
[1, 7, 8, 3, 4, 2, 5, 6, 9],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]]))
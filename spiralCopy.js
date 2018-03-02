function spiralCopy(inputMatrix) {
  let result = [inputMatrix[0][0]];
  let current = [0, 0];
  let rightBorder = bottomBorder = leftBorder = topBorder = 0;
  while (result.length < inputMatrix.length * inputMatrix[0].length) {
    result = result.concat(traverse('right', current, inputMatrix, rightBorder));
    topBorder++;
    if (result.length === inputMatrix.length * inputMatrix[0].length) break;
    result = result.concat(traverse('down', current, inputMatrix, bottomBorder));
    rightBorder++;
    if (result.length === inputMatrix.length * inputMatrix[0].length) break;
    result = result.concat(traverse('left', current, inputMatrix, leftBorder));
    bottomBorder++
    if (result.length === inputMatrix.length * inputMatrix[0].length) break;
    result = result.concat(traverse('up', current, inputMatrix, topBorder));
    leftBorder++;
  }
  return result;
}

let traverse = (dir, current, matrix, border) => {
  let result = [];
  if (dir === 'right') {
    for (var i = current[1] + 1; i < matrix[current[0]].length - border; i++) {
      result.push(matrix[current[0]][i]);
    }
    current[1] = i - 1;
  } else if (dir === 'down') {
    for (var i = current[0] + 1; i < matrix.length - border; i++) {
      result.push(matrix[i][current[1]]);
    }
    current[0] = i - 1;
  } else if (dir === 'left') {
    for (var i = current[1] - 1; i >= border; i--) {
      result.push(matrix[current[0]][i]);
    }
    current[1] = i + 1;
  } else if (dir === 'up') {
    for (var i = current[0] - 1; i >= border; i--) {
      result.push(matrix[i][current[1]]);
    }
    current[0] = i + 1;
  }
  return result;
}

console.log(spiralCopy([[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]]));

console.log(spiralCopy([[1, 2, 3],
[6, 7, 8],
[11, 12, 13],
[16, 17, 18]]));

console.log(spiralCopy([[1, 2],
[6, 7],
[11, 12],
[16, 17]]));
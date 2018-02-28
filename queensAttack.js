let queensAttack = (n, k, r_q, c_q, obstacles) => {
  let count = 0;
  let moves = [[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1]];
  let current;
  for (let i = 0; i < moves.length; i++) {
    current = [r_q, c_q];
    current[0] += moves[i][0];
    current[1] += moves[i][1];
    while (current[0] > 0 && current[0] <= n && current[1] > 0 && current[1] <= n) {
      if (checkObstacles(current, obstacles)) {
        break;
      }
      count++;
      current[0] += moves[i][0];
      current[1] += moves[i][1];
    }
  }
  return count;
}

let checkObstacles = (current, obstacles) => {
  for (var a = 0; a < obstacles.length; a++) {
    if (current[0] === obstacles[a][0] && current[1] === obstacles[a][1]) {
      return true;
    }
  }
  return false;
}

queensAttack(5, 3, 4, 3, [[5,5],[4,2],[2,3]])
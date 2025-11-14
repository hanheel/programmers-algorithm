// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

// const [N, M] = input[0].split(" ").map(Number);
// const maps = input.slice(1).map((line) => line.split("").map(Number));

function solution(N, M, maps) {
  const START = [1, 1, 1];
  const position = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]; // 1) 돌 수 있는 position을 지정하고, 하나씩 순회한다

  const queue = [];
  const visited = new Set();
  queue.push(START);

  while (queue.length !== 0) {
    const value = queue.shift();
    const [x, y, dist] = value;
    // 2) 해당 값에 대해 상하좌우를 탐색한다

    for (const p of position) {
      const [dx, dy] = p;
      // 새로운 좌표를 만든다 (⭐️)
      const nx = x + dx;
      const ny = y + dy;
      // 큐에 넣을 수 있는 값을 추린다
      // - 자바스크립트에서 배열은 깊은 비교가 어렵다는 점에 유의, 문자열로 비교를 진행한다
      if (visited.has(`${nx},${ny}`)) continue;
      if (nx > M || nx < 1) continue;
      if (ny < 1 || ny > N) continue;
      if (maps[ny - 1][nx - 1] === 0) continue;

      const nextDist = dist + 1;
      queue.push([nx, ny, nextDist]);
      visited.add(`${nx},${ny}`);

      if (nx === M && ny === N) return nextDist;

      // 2) 상하좌우를 탐색한다 (큐가 빌 때까지)
      // - 갈 수 있는 위치인지 1,0값을 탐색한다
      // - 이미 방문했던 위치라면 넘어간다
      // - 영역을 넘어갔는지를 확인한다
      // - answer의 시작값은 1이다 (자기자신 포함)
      // - 모든 조건을 만족했다면 answer의 값을 더하고, 큐에 값을 추가한다
      // - 만약 x,y값이 N,M과 같다면 지금까지의 answer을 리턴한다
    }
  }
  return 0;
}

// console.log(solution(N, M, maps));

// console.log(
//   // y ,x (세로, 가로 값)
//   solution(4, 6, [
//     [1, 0, 1, 1, 1, 1],
//     [1, 0, 1, 0, 1, 0],
//     [1, 0, 1, 0, 1, 1],
//     [1, 1, 1, 0, 1, 1],
//   ]),
// );

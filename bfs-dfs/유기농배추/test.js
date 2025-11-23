const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

function solution(M, N, K, positions) {
  // 배추가 심어져 있는 땅을 준다
  // 인접한 배추라면 ㄱㅊ
  // positions를 순회한다 -> 그리고 visited를 관리한다
  // 큐가 비어있다면 다음 순회로 넘어가되, visited에 이미 들어간 위치라면 pass 한다
  // pass 하는 순간 벌레가 하나 필요한 것
  const visited = new Set();
  const positionSet = new Set();
  for (const position of positions) {
    const [x, y] = position;
    positionSet.add(`${x},${y}`);
  }
  const offset = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let count = 0;
  for (const position of positions) {
    const [x, y] = position;
    if (visited.has(`${x},${y}`)) continue;

    const queue = [];
    queue.push(position);
    visited.add(`${x},${y}`);
    while (queue.length !== 0) {
      const [x, y] = queue.pop();
      for (const [dx, dy] of offset) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0) continue;
        // ny가 세로길이, nx가 가로길이를 넘어가면 안됨
        if (nx > M - 1 || ny > N - 1) continue;
        if (!positionSet.has(`${nx},${ny}`)) continue;
        if (visited.has(`${nx},${ny}`)) continue;

        visited.add(`${nx},${ny}`);
        queue.push([nx, ny]);
      }
    }
    count++;
  }

  return count;
}

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);
  const positions = input.slice(idx, idx + K).map((line) => line.split(" ").map(Number));
  idx += K;

  const result = solution(M, N, K, positions);
  console.log(result);
}

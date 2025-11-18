const fs = require("node:fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const map = input.slice(1).map((line) => line.split("").map(Number));

function solution(N, map) {
  const answer = [];
  const offset = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  //1) 여러 단지에 대한 연산
  const visited = new Set();
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      // 2) 한 단지에 대한 연산
      if (map[y][x] === 0 || visited.has(`${x},${y}`)) continue;

      let count = 0;
      const queue = [];
      queue.push([x, y]);
      visited.add(`${x},${y}`);
      while (queue.length !== 0) {
        const [startX, startY] = queue.pop();
        for (const [dx, dy] of offset) {
          nx = startX + dx;
          ny = startY + dy;
          if (nx < 0 || ny < 0) continue;
          if (ny > map.length - 1 || nx > map[0].length - 1) continue;
          if (map[ny][nx] === 0) continue;
          if (visited.has(`${nx},${ny}`)) continue;

          visited.add(`${nx},${ny}`);
          queue.push([nx, ny]);
        }
        count++;
      }
      answer.push(count);
    }
  }

  answer.sort((a, b) => a - b);
  return [answer.length, ...answer].join("\n");
}

console.log(solution(N, map));

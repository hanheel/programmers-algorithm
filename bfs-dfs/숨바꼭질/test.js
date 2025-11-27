// 1차원이어도 BFS로 탐색할 수 있다

const fs = require("node:fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .split(" ")
  .map((i) => Number(i));

function solution(input) {
  // 갔던 위치는 볼 필요 없다
  // 대신 K와 같아지는 순간 반복 종료
  const [N, K] = input;
  const queue = [];
  const visited = new Set();
  // 갔던 곳을 갈 수는 있으나 안가는 게 효율적
  // 큐가 빌 때까지 반복함
  // 현재 위치를 큐에 넣어줌
  // 현재 위치 기반으로 갈 수 있는 위치 탐색
  // 1) visited인가?
  // 2) 넘어가는 순간에는 +1, *2는 연산하면 안됨 무조건 빼야함
  // 3) 0보다 작은순간에는 *2와 -1은 연산하면 안됨
  queue.push([N, 0]);
  while (queue.length !== 0) {
    const [current, initCount] = queue.shift();
    if (visited.has(current)) continue;
    if (current === K) {
      return initCount;
    }
    // 반복문으로 바꿔야 함
    // 거리를 포함해야 함
    for (const next of [
      [current + 1, initCount + 1],
      [current - 1, initCount + 1],
      [current * 2, initCount + 1],
    ]) {
      const [value, count] = next;
      if (value < 0) continue;
      if (value > 100000) continue;
      if (visited.has(value)) continue;
      queue.push([value, count]);
      visited.add(current);
    }
  }
  return -1;
}

// const input = [5, 17];
console.log(solution(input));

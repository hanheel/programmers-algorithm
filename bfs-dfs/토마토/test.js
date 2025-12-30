const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 제한 사항
// 1) 전체 크기는 배열 Length = 세로길이 / 배열 첫번째 요소 length = 가로 길이
// 2) -1 일 경우 continue, 1일 경우엔 continue, 0일 경우에는 1로 변경
// 0->1로 했을 경우 1의 개수 증가

// 큐가 비었을 때 전체 길이와 1의 개수 비교

function solution(_, __, box) {
  // 1) 시작점 좌표 찾기 : 1이 들어가 있는 좌표를 찾는다
  const FIRST = [];
  let minusCount = 0;
  for (let i = 0; i < box.length; i++) {
    for (let j = 0; j < box[0].length; j++) {
      if (box[i][j] === 1) {
        FIRST.push([j, i]);
        continue;
      }
      if (box[i][j] === -1) {
        minusCount++;
      }
    }
  }
  // 2) 반복문을 돌 큐를 만든다
  const queue = [];
  const offset = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const row = box.length;
  const column = box[0].length;

  let count = 0;
  let answer = 0;
  // 3) 시작점을 돌면서 큐에 넣어준다
  for (const [startX, startY] of FIRST) {
    queue.push([startX, startY, 0]);
    // 정합성을 위해 startX, startY 좌표도 1로 수정
    box[startY][startX] = 1;
  }

  // 4) 시작점 기준으로 상하좌우를 순회하며 가능할 때까지 1로 바꾼다

  let pointer = 0;

  while (pointer < queue.length) {
    const [x, y, day] = queue[pointer++];
    answer = Math.max(answer, day);

    count++;

    for (const [offsetX, offsetY] of offset) {
      const nx = x + offsetX;
      const ny = y + offsetY;

      if (ny > row - 1 || ny < 0) continue;
      if (nx > column - 1 || nx < 0) continue;
      if (box[ny][nx] !== 0) continue;

      queue.push([nx, ny, day + 1]);
      box[ny][nx] = 1;
    }
  }

  if (count === row * column - minusCount) return answer;
  return -1;
}

/* ===== 입력 파싱 ===== */
const [M, N] = input[0].split(" ").map(Number);
const box = input.slice(1).map((line) => line.split(" ").map(Number));

// const box = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1],
// ];
// const M = box.length;
// const N = box[0].length;

/* ===== 출력 ===== */
const result = solution(M, N, box);
console.log(result);

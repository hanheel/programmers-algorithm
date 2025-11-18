// const fs = require("node:fs");
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

// const N = Number(input[0]);
// const meetings = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(meetings) {
  // 종료 시각 기준으로 정렬한다
  // 정렬된 요소를 처음부터 더하되, 시작 시각이 현 시각을 넘어섰다면 배열에서 삭제한다
  // 주의 : 종료 시각이 같다면 시작 시각이 빠른 기준으로 재정렬 할 것 (문제 잘 읽기)
  meetings.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let now = 0;
  let count = 0;
  for (const [start, end] of meetings) {
    if (start < now) continue;
    now = end;
    count++;
  }

  return count;
}

const meetings = [
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6, 10],
  [8, 11],
  [8, 12],
  [2, 13],
  [12, 14],
];
console.log(solution(meetings));

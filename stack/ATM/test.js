// // 백준 제출용 입력 처리 (ES6)
// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

// const N = Number(input[0]);
// const arr = input[1].split(" ").map(Number);

function solution(N, arr) {
  // 오래 걸리는 사람을 최대한 일찍 시작하도록
  // 오래 걸리는 사람이 앞에 있으면, 뒤에있는 사람 수 * 오래 걸리는 사람이 소요하는 시간 만큼이 더 소요되기 때문
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (const [index, value] of arr.entries()) {
    sum += (arr.length - index) * value;
  }
  return sum;
}

console.log(solution(N, arr));

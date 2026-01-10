const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const people = [];

for (let i = 1; i <= N; i++) {
  const [w, h] = input[i].split(" ").map(Number);
  people.push([w, h]);
}

const result = solution(N, people);
console.log(result.join(" "));

function solution(_, arr) {
  // 굉장히 작은 크기
  // 시간 복잡도를 신경 쓸 필요가 없다
  // 나보다 몇 명이 더 큰지를 알아야 함
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (current[0] < arr[j][0] && current[1] < arr[j][1]) {
        count++;
      }
    }
    answer.push(count + 1);
  }

  return answer;
}

const arr = [
  [55, 185],
  [58, 183],
  [88, 186],
  [60, 175],
  [46, 155],
];
console.log(solution(arr));

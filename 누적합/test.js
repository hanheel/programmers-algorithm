const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const queries = [];
for (let k = 0; k < M; k++) {
  queries.push(input[2 + k].split(" ").map(Number));
}

// 그냥 합은 -> 시간 복잡도가 O(N*M) => 100억번 연산됨
// 딱 한번만 O(n)으로 돌고, 값을 참조해서 꺼낼 수 있도록 하는 것 = 누적합
function solution(queries, arr) {
  // 누적합 배열을 만든다
  const sum = [0];
  for (let i = 0; i < arr.length; i++) {
    sum.push(sum[i] + arr[i]);
  }

  answer = "";
  for (const [i, j] of queries) {
    answer += sum[j] - sum[i - 1];
    answer += "\n";
  }

  return answer;
}

console.log(solution(queries, arr));

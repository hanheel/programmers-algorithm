const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const N = Number(input);

function solution(N) {
  let answer = 1;
  const COUNT = 6;
  let start = 1;
  let end = 1;

  while (N > end) {
    if (start <= N && N <= end) return answer;

    start = end + 1;
    end = end + COUNT * answer;

    answer++;
  }
}

console.log(solution(N));

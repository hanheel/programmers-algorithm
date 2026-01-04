// const fs = require("fs");
// const input = Number(fs.readFileSync(0, "utf8").trim());

// 홀수면 SK, 짝수면 CY
function solution(N) {
  return N % 2 === 0 ? "CY" : "SK";
}

const N = 6;
console.log(solution(N));

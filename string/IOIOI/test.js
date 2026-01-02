const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2];

function solution(N, M, S) {
  let i = 0;
  let answer = 0;
  let patternCount = 0;

  while (i < S.length) {
    if (S[i] === "I" && S[i + 1] === "O" && S[i + 2] === "I") {
      patternCount++;
      i += 2;
      if (patternCount === N) {
        answer++;
        patternCount--;
      }
      continue;
    }
    patternCount = 0;
    i++;
  }

  return answer;
}

// const N = 2;
// const S = "IOIIOIIOIIOI";
// const M = S.length;

const result = solution(N, M, S);
console.log(result);

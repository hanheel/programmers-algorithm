// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 괄호를 쳐서 최솟값을 만들어야 한다
// - 기준으로 split 하고 split한 값을 먼저 연산하면 최솟값이 나온다
function solution(input) {
  const splitExp = input.split("-");
  const temp = [];

  for (const exp of splitExp) {
    const plusNumbers = exp.split("+");
    const sum = plusNumbers.reduce((sum, a) => sum + Number(a), 0);
    temp.push(sum);
  }

  let sum = 0;
  for (const [index, value] of temp.entries()) {
    if (index === 0) {
      sum += value;
      continue;
    }
    sum -= value;
  }

  return sum;
}

const input = "55-50+40";
console.log(solution(input));

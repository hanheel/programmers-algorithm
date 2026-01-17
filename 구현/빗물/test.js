const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 입력 파싱
const [H, W] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function solution(arr) {
  let total = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    const left = Math.max(...arr.slice(0, i));
    const right = Math.max(...arr.slice(i + 1));
    const ref = Math.min(left, right);

    if (ref <= arr[i]) continue;

    total += ref - arr[i];
  }

  return total;
}

const result = solution(arr);
console.log(result);

// BOJ 11047 - 동전 0

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const [N, K] = input[idx++].split(" ").map(Number);

// 동전 배열
const coins = [];
for (let i = 0; i < N; i++) {
  coins.push(Number(input[idx++]));
}

function solution(N, K, coins) {
  // 숫자 배열을 큰수부터 돌면서 몫을 가져가기
  // 나머지로 업데이트 한 후, 남은 숫자 돌기
  let value = K;
  let count = 0;
  coins.sort((a, b) => b - a);

  for (const coin of coins) {
    if (value === 0) return count;
    if (coin > value) continue;

    const temp = Math.floor(value / coin);
    count += temp;
    value -= coin * temp;
  }
  return count;
}
N = 10;
K = 4200;
coins = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

console.log(solution(N, K, coins));

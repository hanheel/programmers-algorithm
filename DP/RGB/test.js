const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

function solution(_, costs) {
  const dp = Array.from({ length: costs.length }, () => []);

  dp[0] = [...costs[0]];

  // 몇 번째 집
  for (let i = 1; i < costs.length; i++) {
    // R / G / B
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]); // R
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]); // G
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]); // B
  }

  return Math.min(...dp[costs.length - 1]);
}

const N = Number(input[0]);
const costs = input.slice(1).map((line) => line.split(" ").map(Number));

// const costs = [
//   [1, 100, 100],
//   [100, 1, 100],
//   [100, 100, 1],
// ];
// const N = costs.length;

const result = solution(N, costs);
console.log(result);

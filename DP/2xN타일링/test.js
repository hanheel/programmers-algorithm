const fs = require("fs");
const input = Number(fs.readFileSync(0, "utf8").trim());

function solution(n) {
  // 1, 2를 조합해서 n을 만드는 방법 아닌가?
  // 특정 지점까지의 경우의 수를 구해볼까
  // 3지점이면 = d[1] * 1개 + d[2] * 1개
  // 2지점이면 = d[2] = d[1] + 1개 + d[0] + 1개
  const dp = [];
  dp.push(0);
  dp.push(1);
  dp.push(2);
  let i = 3;
  while (i <= n) {
    dp.push((dp[i - 1] + dp[i - 2]) % 10007);
    i++;
  }
  const answer = dp[n];
  return answer;
}
// const input = 2;

console.log(solution(input));

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);
let output = [];

function solution(map) {
  // 모든 경우의 수를 생각해야 함
  // -> 100,000 이라 사실상 불가능
  // 2^N
  // 위 아래 둘 중 하나를 선택하는 확률이다
  // DP
  // 개수가 정해져 있는 것은 아니다
  // - 1) i열까지 선택했을 떄 위를 선택했을 때
  // - 2) i열까지 선택했는데 아래를 선택했을 때
  // - 3) i열을 선택하지 앟았을 때
  //dp = [[1,2,3], [1,2,3]...]
  // 점화식 : [(2번 + 위, 3번 + 위), (1번 + 아래, 3번 + 아래), (1번 + 선택X, 3번 + 선택 X)]

  const dp = Array.from({ length: map[0].length }, () => [0, 0, 0]);
  dp[0][0] = map[0][0];
  dp[0][1] = map[1][0];
  dp[0][2] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < 3; j++) {
      const top = map[0][i];
      const bottom = map[1][i];
      // 위를 선택하는 경우의 최댓값
      if (j === 0) {
        // 합이 아니라 둘 중 max의 값을 구하는 것
        dp[i][j] = Math.max(dp[i - 1][1] + top, dp[i - 1][2] + top);
        continue;
      }
      // 아래를 선택하는 경우
      if (j === 1) {
        dp[i][j] = Math.max(dp[i - 1][0] + bottom, dp[i - 1][2] + bottom);
        continue;
      }
      // 선택 X
      if (j === 2) {
        dp[i][j] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
        continue;
      }
    }
  }

  return Math.max(
    dp[dp.length - 1][0],
    dp[dp.length - 1][1],
    dp[dp.length - 1][2]
  );
}

for (let t = 0; t < T; t++) {
  const N = Number(input[idx++]);
  const map = [
    input[idx++].split(" ").map(Number),
    input[idx++].split(" ").map(Number),
  ];

  output.push(solution(map));
}

console.log(output.join("\n"));

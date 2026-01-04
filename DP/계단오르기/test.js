// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

// const N = input[0];
// const arr = input.slice(1);

function solution(stair) {
  // 1) 본인 -1 칸을 밟았을 떄, 본인-2 칸을 밟았을 때 둘 중 큰 값을 설정해서 넣어야 한다
  // - 본인 -1칸을 밟았을 때 : arr[n-1] + dp[n-3] + arr[n]
  // - 본인 -2칸을 밟았을 때 : dp[n-2] + arr[n]
  // 2) 위 두 값을 비교해서 큰 값을 넣어준다
  dp = [];
  const arr = [0, ...stair];

  dp.push(0);
  dp.push(arr[1]);
  if (arr.length > 2) {
    dp.push(arr[1] + arr[2]);
  }

  for (let i = 3; i < arr.length; i++) {
    dp.push(Math.max(arr[i - 1] + dp[i - 3] + arr[i], dp[i - 2] + arr[i]));
  }

  return dp.pop();
}

// arr = [10, 20, 15, 25, 10, 20];
// arr = [10, 20];

console.log(solution(arr));

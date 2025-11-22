const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const N = Number(input[idx++]);

const TP = [];
for (let i = 0; i < N; i++) {
  const [t, p] = input[idx++].split(" ").map(Number);
  TP.push([t, p]);
}

function solution(_, TP) {
  // 상담을 적당히 했을 때 가져갈 수 있는 최대 이익
  // 한다 / 안한다를 기준으로 값을 따지고, 그 경우의 수에서 갖고 올 수 있는 최댓값을 구한다
  // 마지막에 최댓값을 구한다
  // 상담을 할 경우 : ((해당 날짜 + 소요 시간)에 있는 d[i] 값) + 본인의 값
  // 상담을 안할 경우 : d[(본인 +1)]
  // 마지막 (퇴사 N+1)은 무조건 0

  const profitArray = Array.from({ length: TP.length + 1 }, () => 0);
  const maxDay = TP.length;

  for (let i = maxDay - 1; i >= 0; i--) {
    const [time, profit] = TP[i];
    // 소요시간을 더했는제 마지막 날짜를 넘어버리면 - 애초에 상담 못함
    // 해당 날짜 포함임에 주의할 것
    // 종료일은 i+time, i+time이 마지막 날짜를 넘어가면 0
    if (i + time > maxDay) {
      profitArray[i] = profitArray[i + 1] ?? 0;
      continue;
    }
    // 상담했을 때와 안했을 때를 비교해서 max 값을 넣는다
    const able = profitArray[i + time] + profit;
    const disable = profitArray[i + 1];
    profitArray[i] = Math.max(able, disable);
  }

  // 제일 맨 처음에 있느 값이 최댓값일 것
  return profitArray[0];
}

// const N = 10;
// const TP = [
//   [1, 1],
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [1, 5],
//   [1, 6],
//   [1, 7],
//   [1, 8],
//   [1, 9],
//   [1, 10],
// ];

console.log(solution(N, TP));

// 음수일 경우에는 절댓값 비교 후 음수끼리 곱해야 함
// 0은 무조건 곱하지 않아야 함
// 양수값은 절댓값이 큰 것부터 묶어야 함

// 무작정 전체 배열을 도는 것이 답이 아닐 수도
// ⭐️ if문의 depth가 깊어지면, 한 번 분류하는 것도 고민해 볼 것 ⭐️

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

// const numbers = [1, 1];

function solution(numbers) {
  let answer = 0;
  // 분기처리가 아니라 일단 분리하고 시작하는 것
  const positive = [];
  const negative = [];
  let zeroCount = 0;
  for (const num of numbers) {
    if (num === 0) {
      zeroCount++;
      continue;
    }
    if (num === 1) {
      answer++;
      continue;
    }
    if (num > 0) {
      positive.push(num);
      continue;
    }
    negative.push(num);
  }

  const sortedP = positive.sort((a, b) => a - b);
  for (let i = 0; i < sortedP.length; i += 2) {
    const curr = sortedP[i];
    if (i === sortedP.length - 1) {
      answer += curr;
      continue;
    }
    const next = sortedP[i + 1];
    answer += curr * next;
  }

  const sortedN = negative.sort((a, b) => b - a);
  for (let i = 0; i < sortedN.length; i += 2) {
    const curr = sortedN[i];
    if (i === sortedN.length - 1) {
      if (zeroCount !== 0) {
        zeroCount--;
        continue;
      }
      answer += curr;
      continue;
    }
    const next = sortedN[i + 1];
    answer += curr * next;
  }

  return answer;
}

console.log(solution(numbers));

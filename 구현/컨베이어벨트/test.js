const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);

const N = parseInt(input[0]);
const K = parseInt(input[1]);
const belt = input.slice(2).map(Number);

function solution(N, K, belt) {
  let zeroCount = 0;
  let turn = 0;
  // 로봇은 상단 벨트(N개 칸) 위에만 존재할 수 있으므로 크기를 N으로 설정
  let robots = new Array(N).fill(false);

  // 초기 내구도 0인 개수 파악
  for (let b of belt) if (b === 0) zeroCount++;

  while (zeroCount < K) {
    turn++;

    // 1단계: 벨트와 로봇이 한 칸 회전
    // 벨트 회전 (맨 뒤를 빼서 맨 앞으로)
    belt.unshift(belt.pop());

    // 로봇 회전 (상단 N칸 내에서만 이동)
    robots.pop(); // N-1 지점에 있던 로봇은 벨트가 돌면서 자동으로 내려감
    robots.unshift(false); // 0번 지점은 새로 비워짐
    robots[N - 1] = false; // 혹시 모르니 내리는 위치 로봇 다시 제거

    // 2단계: 로봇 이동 (가장 먼저 올라간 로봇부터 = 뒤에서부터)
    for (let i = N - 2; i >= 0; i--) {
      if (robots[i] && !robots[i + 1] && belt[i + 1] > 0) {
        robots[i] = false;
        robots[i + 1] = true;
        belt[i + 1]--;
        if (belt[i + 1] === 0) zeroCount++;
      }
    }
    robots[N - 1] = false; // 내리는 위치에 도달한 로봇 제거

    // 3단계: 로봇 올리기
    if (belt[0] > 0) {
      robots[0] = true;
      belt[0]--;
      if (belt[0] === 0) zeroCount++;
    }
  }
  return turn;
}

console.log(solution(N, K, belt));

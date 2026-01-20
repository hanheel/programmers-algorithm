const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

function solution(N, arr) {
  // 작은수부터 제자리를 찾는다
  // 빈자리의 개수를 보고 넣는다
  // 정렬 -> [2,1,1,0] -> 크기 기준 (1,2,3,4)
  // [0,0,0,0] -> 가장작은 1부터, 앞의 빈자리 2개 빼고 3번째
  // [0,0,1,0] -> 그 다음 2, 앞의 빈자리 1개 빼고 두 번째
  // [0,2,1,0] -> 그 다음 3, 앞의 빈자리 1개 빼고 맨 마지막
  //...
  const answer = Array.from({ length: N }, () => 0);
  for (let height = 1; height <= N; height++) {
    const needVacancy = arr[height - 1];
    console.log(height, needVacancy, answer);

    let vacancy = 0;
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] !== 0) continue;
      if (vacancy === needVacancy) {
        answer[j] = height;
        break;
      }
      if (answer[j] === 0) {
        vacancy++;
        continue;
      }
    }
  }

  return answer;
}

console.log(solution(N, arr));

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [A, B] = input[0].split(" ");

function solution(A, B) {
  // 겹치는 구간을 찾아야 한다 (가장 많이)
  //길이가 50이다 = 반복문을 많이 쓸 수 있다
  // 각 길이를 돌면서 얼마만큼 겹치는지를 파악한다
  // 반복은 0에서 B길이 -  A길이
  // 같지 않다면 +1, Min의 index 출력 (차이는 A 기준으로 생각할 것)
  const countArr = [];
  for (let i = 0; i <= B.length - A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] !== B[i + j]) {
        count++;
      }
    }
    countArr.push(count);
  }

  return Math.min(...countArr);
}

console.log(solution(A, B));

const fs = require("fs");

// 백준 제출용 입력
const input = fs.readFileSync(0, "utf8").trim();

const result = solution(input);
console.log(result);

function solution(str) {
  //  연속되는 것의 덩어리 개수를 구한다
  // 그거 기반 2로 나눈 몫을 반환한다
  let count = 1;
  let index = 0;
  let prev = str[index++];

  for (index; index < str.length; index++) {
    if (prev !== str[index]) {
      count++;
    }
    prev = str[index];
  }

  return Math.floor(count / 2);
}

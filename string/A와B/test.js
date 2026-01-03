// const fs = require("fs");

// const input = fs.readFileSync(0, "utf8").trim().split("\n");
// let [S, T] = input;

// 그리디
// 1) 마지막 글자가 A라면 -> A를 제외한다
// 2) 마지막 글자가 B라면 -> B를 제외하고 뒤집는다

const CAN = 1;
const CANNOT = 0;

function solution(S, T) {
  const array = T.split("");

  while (array.length > S.length) {
    const a = array.pop();
    if (a === "A") {
      continue;
    }
    if (a === "B") {
      array.reverse();
      continue;
    }
    return null;
  }

  return S === array.join("") ? CAN : CANNOT;
}

const S = "B";
const T = "ABBA";
console.log(solution(S, T));

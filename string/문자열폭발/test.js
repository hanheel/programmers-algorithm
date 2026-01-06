const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const str = input[0];
const suffix = input[1];

function solution(str, suffix) {
  // answer의 끝이 char과 같은가?
  // 일단 다 넣고
  // answer의 끝을 잘라봤을 때 같은지를 봐야 할 듯
  // suffix의 마지막 글자와 같다면 잘라서 봐야 하나?
  let answer = [];
  const lastWord = suffix[suffix.length - 1];
  for (let i = 0; i < str.length; i++) {
    answer.push(str[i]);
    // 마지막 글자와 같다면
    // answer의 끝부터 pointer을 옮겨가면서 같은지 확인
    if (str[i] !== lastWord) continue;

    let count = 0;
    for (let j = 1; j <= suffix.length; j++) {
      if (answer.length < suffix.length) {
        count = 0;
        break;
      }
      if (answer[answer.length - j] !== suffix[suffix.length - j]) {
        count = 0;
        break;
      }
      count++;
    }

    if (count === suffix.length) {
      answer.splice(-suffix.length);
      count = 0;
    }
  }

  return answer.length === 0 ? "FRULA" : answer.join("");
}

// const str = "mirkovC4nizCC44";
// const suffix = "C4";
console.log(solution(str, suffix));

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const unheard = input.slice(1, 1 + N);
const unseen = input.slice(1 + N, 1 + N + M);

function solution(_, M, unheard, unseen) {
  const unseenSet = new Set(unseen);
  // has를 이용해서 다른 set에 있는 경우만 담기
  const result = [];
  for (const person of unheard) {
    if (unseenSet.has(person)) {
      result.push(person);
    }
  }

  // 사전순 출력
  return result.sort();
}

// const N = 3;
// const M = 4;
// const unheard = ["ohhenrie", "charlie", "baesangwook"];
// const unseen = ["obama", "baesangwook", "ohhenrie", "clinton"];

const result = solution(N, M, unheard, unseen);

console.log(result.length);
console.log(result.join("\n"));

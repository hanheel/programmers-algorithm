const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

const out = [];
for (let t = 0; t < T; t++) {
  const W = input[idx++].trim();
  const K = Number(input[idx++].trim());
  out.push(String(solution(W, K)));
}

console.log(out.join("\n"));

function solution(W, K) {
  // 문자열 한 번 순회해서 인덱스 배열 만들기
  // 각 인덱스 배열을 순회하면서 길이 구하기
  // 최대 최소 반환
  const count = {};
  const arr = W.split("");
  for (const [index, char] of arr.entries()) {
    if (count[char] === undefined) {
      count[char] = [index];
      continue;
    }
    count[char].push(index);
  }
  let min = Infinity;
  let max = 0;
  for (const arr of Object.values(count)) {
    let i = 0;
    while (i + K - 1 < arr.length) {
      min = Math.min(arr[i + K - 1] - arr[i] + 1, min);
      max = Math.max(arr[i + K - 1] - arr[i] + 1, max);
      i++;
    }
  }

  return min === Infinity || max === 0 ? -1 : `${min} ${max}`;
}

// console.log(solution("bbbab", 3));

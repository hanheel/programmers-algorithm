const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(N, arr) {
  const dict = {};
  for (let i = 1; i <= N; i++) {
    dict[i] = new Set();
  }

  for (const [key, value] of arr) {
    dict[key].add(value);
    dict[value].add(key);
  }

  const answer = Array.from({ length: N - 1 }, () => 0);
  const queue = [];
  const visited = new Set();

  for (const oneChild of dict[1]) {
    queue.push([1, oneChild]);
  }
  visited.add(1);

  let pointer = 0;
  while (pointer < queue.length) {
    const [parent, child] = queue[pointer++];
    if (visited.has(child)) continue;

    answer[child - 2] = parent;
    visited.add(child);

    for (const nextChild of dict[child]) {
      queue.push([child, nextChild]);
    }
  }

  return answer;
}

// const N = 12;
// const arr = [
//   [1, 2],
//   [1, 3],
//   [2, 4],
//   [3, 5],
//   [3, 6],
//   [4, 7],
//   [4, 8],
//   [5, 9],
//   [5, 10],
//   [6, 11],
//   [6, 12],
// ];

const result = solution(N, arr);
console.log(result.join("\n"));

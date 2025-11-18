// const fs = require("node:fs");
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

// const N = Number(input[0]);
// const files = input.slice(1);

function solution(N, files) {
  const dict = {};
  for (const file of files) {
    const [_, ext] = file.split(".");
    dict[ext] = dict[ext] ?? 0;
    dict[ext] += 1;
  }

  const answer = Object.entries(dict)
    .sort()
    .map((arr) => arr.join(" "))
    .join("\n");

  return answer;
}

const N = 8;
const files = [
  "sbrus.txt",
  "spc.spc",
  "acm.icpc",
  "korea.icpc",
  "sample.txt",
  "hello.world",
  "sogang.spc",
  "example.txt",
];

console.log(solution(N, files));

"use strict";

const fs = require("fs");

function solution(H, W, N, M) {
  const y = 1 + N;
  const x = 1 + M;

  return Math.ceil(H / y) * Math.ceil(W / x);
}

function main() {
  const input = fs.readFileSync(0, "utf8").trim();
  if (!input) return;

  const [H, W, N, M] = input.split(/\s+/).map(Number);

  //   const [H, W, N, M] = [5, 4, 1, 1];
  const answer = solution(H, W, N, M);
  console.log(answer);
}

main();

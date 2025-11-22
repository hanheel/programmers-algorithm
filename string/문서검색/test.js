const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

function solution(document, word) {
  const reg = new RegExp(word, "g");
  const arr = document.match(reg);

  return arr?.length ?? 0;
}

const document = input[0];
const word = input[1];

// const document = "aaaaaaa";
// const word = "aa";

const result = solution(document, word);
console.log(result);

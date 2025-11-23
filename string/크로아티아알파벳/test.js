// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").trim();

function solution(word) {
  //   const croatia = new Set(["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]);
  const reg = /c=|c-|dz=|d-|lj|nj|s=|z=/g;
  const replaceWord = word.replace(reg, "*");
  return replaceWord.length;
}

const input = "dz=ak";
const result = solution(input);
console.log(result);

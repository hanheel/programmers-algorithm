const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

function solution(str) {
  const dict = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (dict[char] === undefined) {
      dict[char] = 1;
      continue;
    }
    dict[char] += 1;
  }
  let max = -1;
  let answer = "";
  let maxCount = 1;
  for (const [key, value] of Object.entries(dict)) {
    if (value > max) {
      answer = key;
      maxCount = 1;
    }
    if (value === max) {
      maxCount++;
    }
    max = Math.max(max, value);
  }
  if (maxCount > 1) {
    return "?";
  }
  return answer.toUpperCase();
}

// const input = "zZa"
console.log(solution(input));

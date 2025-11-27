// set을 통해서 참조하도록 하자

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

function solution(input) {
  let notAnswer = 0;

  const words = input.slice(1, input.length);
  for (const word of words) {
    const set = new Set();
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        set.add(word[i]);
        continue;
      }
      const prev = word[i - 1];
      const current = word[i];
      if (prev === current) continue;
      if (set.has(current)) {
        notAnswer++;
        break;
      }
      set.add(current);
    }
  }
  return words.length - notAnswer;
}

// const input = ["3", "ab", "aa", "aca", "ba", "bb"];

console.log(solution(input));

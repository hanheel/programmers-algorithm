const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

function solution(a, b, c) {
  const sorted = [a, b, c].sort((a, b) => a - b);
  const [a1, b1, c1] = sorted;
  if (a1 + b1 <= c1) return "Invalid";
  if (a1 === b1 && b1 === c1) return "Equilateral";
  if (a1 === b1 || b1 === c1 || a1 === c1) return "Isosceles";
  return "Scalene";
}

let out = [];
for (let i = 0; i < input.length; i += 3) {
  const a = input[i],
    b = input[i + 1],
    c = input[i + 2];
  if (a === 0 && b === 0 && c === 0) break;
  out.push(solution(a, b, c));
}

console.log(out.join("\n"));

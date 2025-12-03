// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").toString().trim();

// 뒤에서부터 잘라서 확인
function isAble(numbers) {
  const len = numbers.length;
  for (let i = 1; i <= len / 2; i++) {
    const first = numbers.slice(len - i, len);
    const second = numbers.slice(len - i * 2, len - i);
    if (first === second) return false;
  }
  return true;
}

function solution(n) {
  function dfs(current) {
    if (current.length === n) return current;
    for (const num of ["1", "2", "3"]) {
      if (isAble(current + num)) {
        const result = dfs(current + num);
        if (result) return result;
      }
    }
    return null;
  }

  return dfs("");
}

const input = 12;

console.log(solution(input));

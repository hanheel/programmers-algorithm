const fs = require("fs");

// 백준 제출용 입력 처리
const input = fs.readFileSync(0, "utf8").trim();

const result = solution(input);
console.log(result);

function solution(numbers) {
  // 필요한 개수를 count 해서 Max 값을 반환하되,
  // 9는 6으로 반환하여 생각
  // 6은 한 그룹별로 2개 있다고 가정 -> 최후에서 /2를 할 것
  const count = {};
  for (const num of numbers) {
    const currentNum = num === "9" ? "6" : num;
    if (count[currentNum] === undefined) {
      count[currentNum] = 1;
      continue;
    }
    count[currentNum]++;
  }
  if (count["6"]) {
    count["6"] = Math.ceil(count["6"] / 2);
  }

  return Math.max(...Object.values(count));
}

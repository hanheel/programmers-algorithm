const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const sky = [];

for (let i = 1; i <= H; i++) {
  sky.push(input[i].split(""));
}

const result = solution(H, W, sky);

let output = "";
for (let i = 0; i < H; i++) {
  output += result[i].join(" ") + "\n";
}

console.log(output.trim());

function solution(H, W, map) {
  // TODO: 구현
  // 각 구역이 "몇 분"이 지나야 구름이 지나가게 될까
  // 시간 복잡도 -> 100 -> N^2 이상도 가능
  // 그냥 순회
  // 행이 바뀌면 reset
  // - 기본적으로 -1 출력
  // - c를 만나면  0 출력 / 다른c를 만날 때까지추가
  const answer = [];
  for (let j = 0; j < map.length; j++) {
    answer.push([]);

    let count = -1;
    for (let i = 0; i < map[0].length; i++) {
      if (map[j][i] === "c") {
        count = 0;
        answer[j].push(count);
        continue;
      }
      if (count !== -1) {
        answer[j].push(++count);
        continue;
      }
      answer[j].push(count);
    }
  }

  return answer;
}
// const grid = [
//   [".", "c", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", "."],
//   [".", "c", "c", "c", ".", ".", "c", "."],
//   [".", ".", ".", ".", "c", ".", ".", "."],
//   [".", ".", "c", ".", "c", "c", ".", "."],
//   [".", ".", ".", ".", "c", ".", ".", "."],
// ];
// console.log(solution(1, 1, grid));

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const N = Number(input[idx++]);

const map = [];
for (let i = 0; i < N; i++) {
  map.push(input[idx++].split(""));
}

const play = [];
for (let i = 0; i < N; i++) {
  play.push(input[idx++].split(""));
}

function solution(map, play) {
  const offset = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  const answer = [];

  // 지뢰칸 알아내기
  const deadSet = new Set();
  for (let j = 0; j < map.length; j++) {
    for (let i = 0; i < map[0].length; i++) {
      if (map[j][i] === "*") {
        deadSet.add(`${i},${j}`);
      }
    }
  }

  let isDead = false;
  for (let j = 0; j < play.length; j++) {
    answer.push([]);
    for (let i = 0; i < play[0].length; i++) {
      if (play[j][i] === "x" && deadSet.has(`${i},${j}`)) {
        isDead = true;
      }
      if (play[j][i] === ".") {
        answer[j].push(".");
        continue;
      }

      let starCount = 0;
      for (const [dx, dy] of offset) {
        const x = i + dx;
        const y = j + dy;

        if (x < 0 || x >= play[0].length) continue;
        if (y < 0 || y >= play.length) continue;

        if (map[y][x] === "*") {
          starCount++;
        }
      }

      answer[j].push(starCount);
    }
  }

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[0].length; j++) {
      if (isDead) {
        // 지뢰를 밟았으면 게임 종료, 단 한번만 이 if문이 실행된다
        for (const coord of deadSet) {
          const [x, y] = coord.split(",");
          answer[y][x] = "*";
        }
      }
    }
  }

  return answer;
}

// const map = [
//   [".", ".", ".", "*", "*", ".", ".", "*"],
//   [".", ".", ".", ".", ".", ".", "*", "."],
//   [".", ".", ".", ".", "*", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "*", ".", "."],
//   [".", ".", ".", "*", "*", ".", "*", "."],
//   [".", ".", ".", ".", ".", "*", ".", "."],
// ];

// const play = [
//   ["x", "x", "x", ".", ".", ".", ".", "."],
//   ["x", "x", "x", "x", ".", ".", ".", "."],
//   ["x", "x", "x", "x", ".", ".", ".", "."],
//   ["x", "x", "x", "x", "x", ".", ".", "."],
//   ["x", "x", "x", "x", "x", ".", ".", "."],
//   ["x", "x", "x", "x", "x", ".", ".", "."],
//   ["x", "x", "x", ".", ".", ".", ".", "."],
//   ["x", "x", "x", "x", "x", ".", ".", "."],
// ];
const result = solution(map, play);
// console.log(result);

// 출력
let output = "";
for (let i = 0; i < result.length; i++) {
  output += result[i].join("") + "\n";
}

console.log(output.trim());

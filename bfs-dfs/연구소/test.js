// DFS + 완전탐색

// 1) 어떤 벽을 세워야 최댓값인지는 그냥은 알 수 없다 = 완전탐색
// - 전체 경우의 수 중 3개의 벽을 세우는 경우의 수를 반환하자
// - 빈칸들의 좌표만 받은 상태에서 3개를 뽑는 경우의 수를 생각해보자
// - 일반적으로 자바스크립트에서 picked 의 값을 받아 뽑는 것을 구현해본다

// dfs함수는 2가지 조건 하에 끝난다
// 1) 조합 개수를 완전히 다 채웠을 경우 result에 조합을 넣고, dfs 종료
// 2) 모든 요소들을 다 순회했다면 for문까지 끝나면서 함수 종료
// = 마지막 요소가 배열의 끝에 도달했다면,
// 마지막 요소는 length 때문에 pop됨과 동시에 마지마에서 두 번째 요소는 마지막 요소의 for문 종료로 dfs 재귀가 끝나면서 pop

// const fs = require("node:fs");
// const input = fs.readFileSync(0, "utf8").trim().split("\n");

// const [N, M] = input[0].split(" ").map(Number);
// const maps = input.slice(1).map((line) => line.split(" ").map(Number));

function getCombination(arr, count) {
  const result = [];

  function dfs(start, picked) {
    if (picked.length === count) {
      result.push([...picked]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      picked.push(arr[i]);
      dfs(i + 1, picked);
      picked.pop();
    }
  }

  dfs(0, []);

  return result;
}

function solution(maps) {
  const zeroCoordinate = [];
  const virusStartCoords = [];

  //1) 좌표값이 0인 좌표를 1차원 배열에 뽑아낸다 / 2인 좌표도 뽑아낸다
  for (const [y, arr] of maps.entries()) {
    for (const [x, number] of arr.entries()) {
      if (maps[y][x] === 0) zeroCoordinate.push([x, y]);
      if (maps[y][x] === 2) virusStartCoords.push([x, y]);
    }
  }

  let maxSafe = 0;
  // 2) 벽 조합을 가져온다
  const combs = getCombination(zeroCoordinate, 3);

  // 3) 벽을 세운다
  for (const walls of combs) {
    const copiedMaps = maps.map((row) => [...row]);
    for (const [x, y] of walls) {
      copiedMaps[y][x] = 1;
    }

    // 4) 바이러스를 퍼뜨린다
    const afterMaps = spreadVirus(copiedMaps, virusStartCoords);
    // 5) 안전영역을 계산해서 max 값을 업데이트 한다
    const count = getCount(afterMaps);
    maxSafe = Math.max(maxSafe, count);
  }

  return maxSafe;
}

// 2로 값이 바뀌기 때문에 이 BFS에서는 visited 셋이 필요가 없다
function spreadVirus(maps, virusStartCoords) {
  // 큐에 초기값으로 바이러스 초기 위치를 넣는다
  const queue = [...virusStartCoords];
  const offset = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of offset) {
      nx = x + dx;
      ny = y + dy;

      if (nx < 0 || ny < 0) continue;
      if (nx >= maps[0].length || ny >= maps.length) continue;
      if (maps[ny][nx] !== 0) continue;

      maps[ny][nx] = 2;
      queue.push([nx, ny]);
    }
  }

  return maps;
}

function getCount(maps) {
  let count = 0;
  for (const arr of maps) {
    for (const number of arr) {
      if (number === 0) count++;
    }
  }
  return count;
}

// console.log(solution(maps));

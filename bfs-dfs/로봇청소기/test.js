function solution(r, c, d, map) {
  let count = 0;
  let startX = r;
  let startY = c;
  let startD = d;

  while (true) {
    if (startX > map[0].length - 1 || startX < 0) return count;
    if (startY > map.length - 1 || startY < 0) return count;

    //1) 현재 칸을 청소한다
    if (map[startY][startX] === 0) {
      map[startY][startX] = 1;
      count++;
    }
    // 2) 상하 좌우를 돌아본다
    // - 현재 바라보는 방향 -> d
    // - 0이라면(북) -> 왼쪽 -> 아래 -> 오른쪽 -> 위 [-1,0],[0,-1],[1,0],[0,1]
    // - 1(왼)이라면 -> 아래 -> 오른쪽 -> 위 -> 왼쪽
    const offset = getOffset(startD);

    let tempCount = 0;
    for (const [dx, dy] of offset) {
      x = startX + dx;
      y = startY + dy;
      startD = (startD + 3) % 4;

      if (x > map[0].length - 1 || x < 0) continue;
      if (y > map.length - 1 || y < 0) continue;

      if (map[y][x] === 0) {
        startX = x;
        startY = y;
        map[y][x] = 1;
        count++;
        tempCount = 0;
        break;
      }

      tempCount++;
      if (tempCount === 4) {
        // 다시 원래 d로 돌아왔을 것
        const [backDx, backDy] = getBack(startD);
        startX = x + backDx;
        startY = y + backDy;
        if (map[startY][startX] === 1) return count;
        tempCount = 0;
        break;
      }
    }
  }
}

function getBack(d) {
  if (d === 0) return [0, -1];
  if (d === 1) return [1, 0];
  if (d === 2) return [0, 1];
  if (d === 3) return [-1, 0];
}

function getOffset(d) {
  if (d === 0) {
    return [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];
  }
  if (d === 1) {
    return [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ];
  }
  if (d === 2) {
    return [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
  }
  if (d === 3) {
    return [
      [0, 1],
      [-1, 0],
      [0, -1],
      [1, 0],
    ];
  }
}

// 테스트 케이스 3
// 테스트 케이스 4
const r = 1;
const c = 2;
const d = 3;
const map = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
// 예상 결과: 1
// 예상 결과: 8
console.log(solution(r, c, d, map));

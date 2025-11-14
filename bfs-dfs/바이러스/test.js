// const input = fs.readFileSync(0, "utf8").trim().split("\n");

// const n = Number(input[0]);       // 컴퓨터 수
// const m = Number(input[1]);       // 간선 수

// const pairs = input
//   .slice(2, 2 + m)
//   .map(line => line.split(" ").map(Number));
const START = 1;

function solution(n, pairs) {
  // 1) set 기준으로 딕셔너리 생성
  const graph = Array.from({ length: n + 1 }, () => new Set());
  for (const [a, b] of pairs) {
    graph[a].add(b);
    graph[b].add(a);
  } // 2) 탐색
  // 2-1) START 값을 스택에 넣어준다
  const stack = [];
  const visited = new Set();
  stack.push(START);
  let answer = 0;
  // 2-2) 스택을 돌면서 값을 꺼낸다
  while (stack.length !== 0) {
    const node = stack.pop();
    // - 그래프에 없는 노드라면 지나간다
    if (!graph[node]) continue;
    // - 이미 순회한 노드라면 지낙나다
    if (visited.has(node)) continue;

    visited.add(node);
    // 해당 노드와 연결된 노드들을 검사한다
    for (const connectedNode of graph[node]) {
      // 이미 방문한 노드라면 스택에 넣지 않는다
      if (visited.has(connectedNode)) continue;
      stack.push(connectedNode);
    }

    // 값을 더한다 (이 때, 초기값이면 지나친다)
    if (node === START) continue;
    answer++;
  }
  return answer;
}

// const answer = solution(n, pairs);
// console.log(answer);

// TEST
console.log(
  solution(7, [
    [2, 3],
    [1, 5],
    [5, 2],
    [5, 6],
    [4, 7],
  ]),
);

// 1) 연결되어 있는 딕셔너리를 생성한다
// 2) 시작점(1번 컴퓨터)으로부터 파고 들어감
// - 1번을 스택에 넣었다가 pop 하면서 1번 딕셔너리에 있는 연결 컴퓨터들을 스택에 넣음
// - 스택에서 다시 pop을 실행하면서 딕셔너리 value를 넣음
// - 빌 때까지 반복

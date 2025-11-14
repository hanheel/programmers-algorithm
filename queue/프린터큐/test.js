const testInput = `
3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1
`
  .trim()
  .split("\n");

// 🔹 실제 백준 환경처럼 파싱
let idx = 0;
const T = Number(testInput[idx++]);
const output = [];

for (let t = 0; t < T; t++) {
  const [N, M] = testInput[idx++].split(" ").map(Number);
  const priorities = testInput[idx++].split(" ").map(Number);

  const answer = solution(N, M, priorities);
  output.push(answer);
}

console.log(output.join("\n"));

function solution(N, M, priorities) {
  let order = M;
  let answer = 0;

  // 1) priorities를 순회하면서 값을 하나씩 뺀다
  while (priorities.length !== 0) {
    const a = priorities.shift();
    console.log(a, priorities, order);
    // 2) 해당 값을 제외한 나머지 값에 some을 통해 해당 값보다 큰 값이 존재하는지 확인한다
    // - 이 때, 찾고자 하는 값의 순서는 줄어들게 된다
    order--;
    if (priorities.some((value) => value > a)) {
      // - 존재한다면, 큐의 뒤에 삽입한다
      priorities.push(a);
      // - order이 0보다 작아졌다면 (뽑아내는 값이었다면) length -1로 업데이트 한다
      if (order < 0) {
        order = priorities.length - 1;
      }
      continue;
    }

    // - 존재하지 않는다면(인쇄가 가능하다면), 인쇄 횟수를 1증가시킨다
    answer++;
    // 만약 찾고자 하는 값이라면 리턴한다 (order이 0보다 작아진 상황이라면 찾고자 하는 값이 pop됐음을 의미)
    if (order < 0) {
      return answer;
    }
  }

  return 0;
}

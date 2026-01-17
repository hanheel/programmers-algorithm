function solution(num) {
  // 현재 노드를 기준으로 이전 노드 / 다음 노드를 알아낼 수 있는 배열을 만들자 = 연결리스트
  // 현재는 1, 1이전에 연결된 건 최후
  // 인덱스 기준 참조
  const prev = [];
  const next = [];
  for (let i = 0; i < num.length; i++) {
    prev.push(i === 0 ? num[num.length - 1] : num[i - 1]);
    next.push(i === num.length - 1 ? num[0] : num[i + 1]);
  }

  // 제거 방법
  // - 이전 값에 current의 다음 값을 연결
  // - 다음 값에 current의 이전 값을 연결
}

console.log(solution([3, 2, 1, -3, -1]));

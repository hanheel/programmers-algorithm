function solution(n) {
  // 큰 원판이 작은 원판 위에 있음 안된다
  // - 규칙에 따라 시뮬레이션을 구현해야 할 것 같다
  // 정답은 어디에서 어디로 이동하는지를 출력하면 된다
  return hanoi(n, 1, 3, 2, []);
}

function hanoi(n, from, to, aux, result) {
  if (n == 1) {
    result.push([from, to]);
    return result;
  }
  // - n-1개를 1에서 2으로 옮긴다 (최하단을 3으로 옮기기 위해선 그 위가 비어야 하므로)
  hanoi(n - 1, from, aux, to, result);
  // - 마지막 1개를 1에서 3 으로 옮긴다
  result.push([from, to]);
  // - n-1개를 2에서 3으로 옮긴다
  hanoi(n - 1, aux, to, from, result);

  return result;
}

// DP 풀이도 가능
// - 사실상 자신의 위에 있는 n-1개를 aux로 옮기고
// - 마지막 한개를 3으로 옮기고
// - 다시 n-1개를 aux에서 3으로 옮긴다
// dp[n] = dp[n-1]*2 +1

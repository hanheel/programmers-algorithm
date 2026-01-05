function solution(triangle) {
  const dp = [];

  let startLength = triangle.length;
  while (triangle.length > 0) {
    const current = triangle.pop();
    // 만약 dp 배열에 참조해야 할 값이 없다면, 가장 하위의 배열들
    if (current.length === startLength) {
      dp.push(current);
      continue;
    }
    const temp = [];
    for (let i = 0; i < current.length; i++) {
      const reference = dp[0];
      temp.push(Math.max(reference[i], reference[i + 1]) + current[i]);
      // 가장 하위 배열이 아니라면, dp에 있는 값을 참조해서 본인의 최대값을 확인
      // reference = dp[0]
      // - 첫번째 요소 -> reference[0] , reference[1] max
      // - 두 번째 요소 -> refernce[1] , reference[2] max
      //...
      // 배열을 만든 후에, dp에 unshift 할 것
    }
    dp.unshift(temp);
  }

  return dp[0][0];
}

// 1) 내가 생각했던 것 -> 그냥 둘 중 큰 수 선택? ㄴ
// 2) 아니니까 그 앞의 숫자도 생각해야 한다
// 그렇다면 현재 값  + 아래 삼각형에서의 최대 (뱌로 아래의 값만 보는 것은 아니다)
// - 최하위는 본인일 거고
// 그 위는 최하위 둘 중 max + 본인
// 그 위도 좌 / 우 둘 중 max + 본인
// 제일 아래가 0인 상태

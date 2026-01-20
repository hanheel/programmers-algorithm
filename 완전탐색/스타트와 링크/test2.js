function combination(arr, start, count, temp, result) {
  if (temp.length === count) {
    result.push([...temp]);
    return;
  }
  for (let i = start; i < arr.length; i++) {
    temp.push(arr[i]);
    combination(arr, i + 1, count, temp, result);
    temp.pop();
  }

  return result;
}

function solution(N, map) {
  // 다 구해야 할 것 같은데?
  // N개 중 N/2개 뽑기
  let total = 0;
  map.forEach((scores) => scores.forEach((score) => (total += score)));

  const arr = Array.from({ length: N }, (_, i) => i + 1);

  const count = Math.floor(N / 2);
  const result = [];
  const temp = [];
  const combinations = combination(arr, 0, count, temp, result);

  // 전체 합에서 한 팀을 연산한 값을 빼면 굳이 다른 값을 안구해도 됨
  // 조합도 전체 조합을 돌 필요 없이 전체만 돌면됨
  // 조합은 앞에서부터 생성됨 -> 진짜 딱 절반만 돌아도 괜찮다
  // 무조건 조합의 개수는 짝수
  // 전체에서 빼면 안되는데?
  let min = Infinity;
  for (let i = 0; i < combinations.length / 2; i++) {
    const team = combinations[i];
    const otherTeam = getOtherTeam(N, team);
    const score = getTeamBetween(map, team);
    const otherScore = getTeamBetween(map, otherTeam);

    min = Math.min(min, Math.abs(otherScore - score));
  }

  return min;
}

function getOtherTeam(N, team) {
  return Array.from({ length: N }, (_, i) => i + 1).filter(
    (i) => !team.includes(i)
  );
}
// [1,3,4] => 1,3  1,4  3,4
function getTeamBetween(map, team) {
  let total = 0;
  for (let i = 0; i < team.length; i++) {
    const first = team[i] - 1;
    for (let j = i + 1; j < team.length; j++) {
      const second = team[j] - 1;
      total += map[first][second] + map[second][first];
    }
  }

  return total;
}
matrix = [
  [0, 1, 2, 3, 4, 5],
  [1, 0, 2, 3, 4, 5],
  [1, 2, 0, 3, 4, 5],
  [1, 2, 3, 0, 4, 5],
  [1, 2, 3, 4, 0, 5],
  [1, 2, 3, 4, 5, 0],
];

console.log(solution(6, matrix));

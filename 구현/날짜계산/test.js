const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [E, S, M] = input.map(Number);

function solution(E, S, M) {
  // E, S, M이 같다면 그 숫자를 내보내면 됨
  if (E === S && S === M) return E;
  let i = 1;
  let ref = 0;
  while (i < 7980) {
    ref = 15 * i + E;
    const isValidE = (ref - S) % 28 === 0;
    const isValidM = (ref - M) % 19 === 0;
    if (isValidE && isValidM) {
      break;
    }
    i++;
  }

  return ref;
}

console.log(solution(E, S, M));

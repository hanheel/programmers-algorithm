// const fs = require("fs");

// // 로컬 실행용 input.txt 사용
// const input = fs.readFileSync(0).toString().trim(); // 또는 "/dev/stdin"

// // 입력 파싱
// // 첫 줄: N (배열 길이), 두 번째 줄: 배열 원소
// const [n, arrStr] = input.split("\n");
// const arr = arrStr.split(" ").map(Number);

// 한 번 정렬 후 양끝부터 탐색하는 것이 더 빠를까?
// 투포인터? -> 탐색이 필요한데, 완탐은 O(n^2) 일 때.
// 양끝 해보고 -> 값이 0보다

function solution(arr) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  let answer = `${arr[left]} ${arr[right]}`;
  let min = Infinity;
  // 0보다 크다가 작아지는 지점에서 비교
  while (left < right) {
    const value = arr[right] + arr[left];
    if (Math.abs(value) < min) {
      min = Math.abs(value);
      answer = `${arr[left]} ${arr[right]}`;
    }
    if (value === 0) {
      return answer;
    }

    // 음수일 경우
    if (value < 0) {
      left++;
    }
    //양수일 경우
    if (value > 0) {
      right--;
    }
  }

  return answer;
}

// 결과 출력
const arr = [-1, 0, 4, 3, 13];
console.log(solution(arr));

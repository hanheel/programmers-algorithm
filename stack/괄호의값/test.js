const matchStringDict = {
  ")": "(",
  "]": "["
}

const matchValueDict = {
  ")":2,
  "]":3
}

function solution(input) {
  const stack = [];

  for(const ch of input.trim()){
			if (ch === "(" || ch==="[") {
				stack.push(ch);
				continue;
			}

      matchString = matchStringDict[ch]
      matchValue = matchValueDict[ch]

      const a = stack.pop();
      if(matchString !== a && typeof a !== "number") return 0

      if(matchString === a){
        stack.push(matchValue)
        continue
      }

      let localSum = 0
      let temp = a
      while (typeof temp === "number"){
        localSum += temp
        temp = stack.pop()
      }

      if(temp !== matchString) return 0
      stack.push(localSum * matchValue)
		}

    let answer = 0
    while(stack.length !== 0){
      const a = stack.pop()
      if (typeof a !== "number"){
        return 0
      }
      answer += a
    }

    return answer
  }

// TEST
console.log(solution("(()[[]])([])")); // 예시 입력
console.log(solution("(()[[]])([]))"));
console.log(solution("(()[[]])(([]))"));


// 닫는 괄호는 연속적으로 스택에서 나올 수 없다
// 짝이 맞았을 때 숫자를 Push했다면
// 스택을 pop 했을 때는 숫자 또는 여는 괄호만 만날 수 있다
// 짝이 맞는 여는 괄호가 / 숫자 둘 중 하나가 아니라면 0을 반환해야 한다 (불가능)
// 스택에서 값을 꺼냈을 때 어떤 값을 만나게 될 것인가


// 사칙 연산을 stack으로 푼다면
// 1) 여는 괄호는 무조건 스택에 push
// 2) 더하기 빼기 연산도 숫자만 스택에 push
// 3) 곱셈 나눗셈 연산은 곧바로 실행하여 스택에 push
// 4) 닫는 괄호를 만나면 여는 괄호를 만날 때까지 스택에서 pop해서 합치는 연산

// 각각의 연산이 언제 진행되는가? 숫자는 언제 생성되는가에 초점
// 여기에서 숫자 값은 괄호의 만남으로 생성됨
// 덧셈 연산은 내부에 숫자가 여러 개가 있을 때 진행됨
// 곱셈 연산은 내부 숫자 연산이 끝난 이후에 곱해짐 -> 여기에서 일반 사칙연산하고 타이밍이 다르다
// 숫자 판정하는 방법 typeof a === "number"/ !isNan(a)
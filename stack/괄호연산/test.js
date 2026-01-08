// ⭐️ 스택은 pop한 이후 아무것도 행하지 않으면, pop한 상태로 스택이 비워진다는 것 명시 ⭐️
// 스택은 넣을지 말지도 정할 수 있다. 굳이 빼고, 무시하고 할 필요가 없음

// 2) 스택은 온전히 완성된 스택만 사용하도록 한다
// - 주석은 미리 걸러서, 완성된 주석 형태만 실제 스택에서 사용할 수 있도록 한다
// /* */
// /를 만났을 경우, pop한 값이 * 라면 pop해서 합친 후 삽입
// *을 만났을 경우, pop한ㄱ ㅏㅂㅅ이 / 라면 pop해서 합친 후 삽입
// 그 외는 그냥 넣을 것
// 만약 완성된 주석의 형태가 아니라면, 추후 스택에서 사용 시에 걸러질 것

// 3) 변수명
// - !로 선언
// - 선언된 경우에만 사용할 수 있음
// - 알파벳으로 시작해야 하고, 알파벳과 숫자로만 이루어져 있음

// a - 97
// z - 122
// 0- 48
// 9- 57

const START_NUMBER = 48;
const END_NUMBER = 57;
const START_CHAR = 97;
const END_CHAR = 122;

function isInRange(char) {
  const code = char.charCodeAt(0);
  if (
    (code >= START_NUMBER && code <= END_NUMBER) ||
    (code >= START_CHAR && code <= END_CHAR)
  ) {
    return true;
  }
  return false;
}
function isStartByAlphabet(str) {
  if (str.length === 0) {
    return true;
  }

  const firstCode = str[0].charCodeAt(0);
  if (firstCode >= START_CHAR && firstCode <= END_CHAR) {
    return true;
  }
  return false;
}

function validate(name) {
  if (!isStartByAlphabet(name)) {
    return false;
  }
  for (const char of name) {
    if (!isInRange(char)) {
      return false;
    }
  }

  return true;
}

function makeAnnotation(elements) {
  const stack = [];
  for (const element of elements) {
    if (stack.length === 0) {
      stack.push(element);
      continue;
    }
    const popE = stack.pop();
    if (element === "/" && popE === "*") {
      stack.push(popE + element);
      continue;
    }
    if (element === "*" && popE === "/") {
      stack.push(popE + element);
      continue;
    }
    stack.push(popE);
    stack.push(element);
  }
  return stack;
}

// !값이 있을 때 string을 묶어서 set과 array를 반환해 주는 함수
// string을 다루고, 쪼개어 저장해야 한다 -> while + pointer
function makeString(elements) {
  // !로 시작하면 언어 set에 추가한다
  // - !로 시작할 경우 "선언" 모드로 전환한다 (플래그)
  // - tempName에 저장한다
  // - 숫자 또는 영어로 되어있는 경우 계속 tempname에 올린다
  // - 그 외일 경우
  //   - tempName의 길이가 0보다 크다면 지금까지의 tempname을 배열에 push한다
  //   - 플래그가 true일 경우엔 set에도 올린다 / 플래그를 false로 바꾼다
  //   - tempName을 초기화 한다
  if (elements.length === 0) {
    return [];
  }

  let setNameMode = false;
  let tempName = "";
  const result = [];
  const nameSet = new Set();

  for (const current of elements) {
    if (current === "!") {
      setNameMode = true;
      continue;
    }
    if (isInRange(current)) {
      tempName += current;
      continue;
    }
    if (tempName.length > 0) {
      result.push(tempName);
      if (setNameMode) {
        nameSet.add(tempName);
        setNameMode = false;
      }
      tempName = "";
    }
    result.push(current);
    setNameMode = false;
  }

  return {
    nameSet,
    result,
  };
}

function solution(S) {
  // 1) 스택을 활용한다
  // - 현재 값이 ] 일 경우, 스택에서 꺼낸 값이 [ 라면 cotinue 한다
  // - 현재 값이 ) 일 경우, 스택에서 꺼낸 값이 ( 라면 continue 한다
  // - 현재 값이 { 일 경우, 스택에서 꺼낸 값이 } 라면 continue 한다
  // - 그 외일 경우, 스택에서 꺼낸 값 / 현재 값을 순서대로 스택에 push 한다
  const elements = S.split("");
  const elementsWithStack = makeAnnotation(elements);
  const { nameSet, result } = makeString(elementsWithStack);

  const stack = [];
  for (const element of result) {
    if (stack.length === 0) {
      stack.push(element);
      continue;
    }
    const popE = stack.pop();

    if (element === "]" && popE === "[") continue;
    if (element === ")" && popE === "(") continue;
    if (element === "}" && popE === "{") continue;
    // - 스택에 현재 열린 주석, 현재가 닫힌 주석이라면 스택에 있는 것 pop
    if (popE === "/*" && element === "*/") continue;
    // - 스택에 현재 열린 주석, 현재가 닫힌 주석이 아니라면 다시 열린주석 push
    if (popE === "/*" && element !== "*/") {
      stack.push(popE);
      continue;
    }
    // 위가 아니라면 -> 변수일 것
    // 1) nameSet에 있는지 확인
    // 2) validate 실행
    // 3) 둘 다 무사 통과라면 continue (스택에는 넣지 말 것)
    if (!nameSet.has(element) || !validate(element)) {
      return "FALSE";
    }
    if (nameSet.has(element) && validate(element)) {
      stack.push(popE);
      continue;
    }

    stack.push(popE);
    stack.push(element);
  }

  return stack.length > 0 ? "FALSE" : "TRUE";
}

console.log(solution("/*[[!aa]]()*/[aa]"));

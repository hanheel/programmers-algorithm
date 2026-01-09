function solution(a, b) {
  return Math.max(
    Number(a.split("").reverse().join("")),
    Number(b.split("").reverse().join(""))
  );
}

a = "734";
b = "893";

console.log(solution(a, b));

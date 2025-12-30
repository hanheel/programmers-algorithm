## 풀이 피드백

1. visited가 필요하지 않을 수 있다

- 방문한 좌표를 1로 바꾸기 때문에, map의 값만 보고서도 방문했던 곳인지 판단할 수 있다

2. shift가 아닌 포인터 사용

- shift는 한 번 요소를 꺼내면 내부적으로 모든 요소들을 재배치한다
- 배열 크기 x 반복문의 수만큼 복잡도를 가짐
- 인덱스 기반의 포인터를 사용하는 것을 추천

```typescript
let head = 0;
while (head < queue.length) {
  const cur = queue[head++];
}
```

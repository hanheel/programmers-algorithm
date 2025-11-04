def solution(numbers, target):
    # index, sum의 형식
    stack=[]
    stack.append((0,0))
    answer=0
    while stack:

        a,b = stack.pop()
        # 주어진 조합을 모두 연산했을 때 target과 값이 같은 경우
        if a==len(numbers) and b==target:
            answer+=1
            continue
        # 주어진 조합을 모두 연산했지만 target과 같지 않은 경우
        if a==len(numbers) and b!=target:
            continue
            
        # 스택에 다음 조합 push
        stack.append((a+1, b+numbers[a]))
        stack.append((a+1, b-numbers[a]))
    return answer
            
            
        
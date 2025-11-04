def solution(numbers, target):
    # index, sum의 형식
    stack=[]
    stack.append([0,0])
    answer=0
    while stack:

        a,b = stack.pop()
        if a==len(numbers) and b==target:
            answer+=1
            continue
        if a==len(numbers) and b!=target:
            continue
            
        stack.append([a+1, b+numbers[a]])
        stack.append([a+1, b-numbers[a]])
    return answer
            
            
        
import heapq

def solution(scoville, K):
    answer = 0
    # 리스트를 힙으로 만들기
    heapq.heapify(scoville)
  
    if scoville[0]>=K:
        return 0

    while len(scoville) > 1:
        # 가장 작은 두 개의 값 뽑아내기
        a = heapq.heappop(scoville)
        b = heapq.heappop(scoville)
        # 연산 후 넣기
        heapq.heappush(scoville, a+(b*2))
        answer+=1
        # 가장 작은 값이 K보다 크다면 모든 값이 K보다 큼, 연산 종료
        if scoville[0]>=K:
             return answer


    return -1
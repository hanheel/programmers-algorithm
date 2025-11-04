def solution(citations):
    # 오름차순 정렬한다
    citations.sort()
    # 정렬된 리스트를 순회하며 조건을 만족하는지 확인한다
    n = len(citations)
    for i in range(n):
        # 각 citation 값 "이상"으로 인용한 논문의 개수는 전체 길이 - 인덱스이다
        count = n-i
        # citation의 값이 그 citation 이상으로 인용한 개수 (전체 길이 - 인덱스) 보다 크면 리턴한다
        if citations[i] >= count:
            return count
    # 모든 citation이 조건을 만족하지 않는다면 답은 0이다
    return 0
import heapq
import sys

input = sys.stdin.readline

n = int(input())
arr = []
for _ in range(n):
    arr.append(int(input()))

heapq.heapify(arr)

total = 0
while len(arr) > 1:
    a = heapq.heappop(arr)
    b = heapq.heappop(arr)
    total += (a + b)
    heapq.heappush(arr, a + b)

print(total)
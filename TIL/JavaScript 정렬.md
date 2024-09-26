# JavaScript 정렬

## 선택정렬
- 매 단계에서 가장 작은 원소를 선택해 앞으로 보내는 정렬 방법
- 앞으로 보내진 원소는 더 이상 위치가 변경되지 않음
- 시간복잡도 : O(N^2)

### 동작 방식
1. 각 단계에서 가장 작은 원소를 선택한다.
2. 현재까지 처리되지 않은 원소들 중 가장 앞의 원소와 위치를 교체한다.

```
function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
  let temp = arr[i];
  arr[i]
}
```

## 버블정렬

## 삽입정렬

## 버블정렬

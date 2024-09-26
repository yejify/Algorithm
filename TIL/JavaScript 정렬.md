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
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
  }
}
```

## 버블정렬
- 단순히 인접한 두 원소를 확인하여, 정렬이 안되어 있다면 위치를 서로 변경
- 한번의 단계가 수행되면 가장 큰 원소가 맨 뒤로 이동, 다음 단계에서는 맨 뒤로 이도한 데이터를 정렬에서 제외
- 시간 복잡도 : O(n^2)

### 동작방식
1. 각 단계에서 인접한 두 개의 원소를 비교, 필요시 변경한다.
2. 첫째와 둘째를 비교, 둘째와 셋째를 비교, 셋째와 넷째를 비교하는 방식이다.

```
function BubbleSort(arr) {
  for (let i = arr.length - 1;i > 0; i--) {
    for (let j = 0; j < i; j++){
      if (arr[j] < arr[j + 1]) {
        let temp = arr[i];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```

## 삽입정렬
- 각 수(데이터)를 적절한 위치에 삽입하는 정렬 기법
- 시간 복잡도 : O(n^2)

### 동작방식
1. 각 단계에서 현재 원소가 삽입될 위치를 찾는다.
2. 적절한 위치에 도달할 때까지 반복적으로 왼쪽으로 이동한다.

```
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--){
      if (arr[j] > arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
      } else {
        break
      }
    }
  }
}
```

## 병합정렬
- 분할 정복 알고리즘, 재귀함수를 이용하여 구현
- 분할 : 큰 문제를 작은 부분 문제(쉬운 문제)로 분할
- 정복 : 작은 부분 문제를 각각 해결
- 조합 : 해결한 부분 문제의 답을 이용하여 다시 큰 문제를 해결
- 함수 호출 횟수가 많이 발생, 오버헤드로 이어질 수 있음
- 시간 복잡도 : O(NlogN)

### 동작방식
1. 정렬할 배열을 같은 크기의 부분배열 2개로 분할한다.
2. 부분 배열을 정렬한다.
3. 정렬된 부분 배열을 하나의 배열로 다시 병합한다.

```
let sorted = [];

function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left
  while (i <= mid && j <= right) {
    if(arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  if(i > mid) {
    for(; j <= right; j++) sorted[k++] = arr[j];
  } else {
    for(; i <= mid; i++) sorted[k++] = arr[i];
  }
  for (let x = left; x <= right; x++){
    arr[x] = sorted[x];
  }
}

function mergeSort(arr, left, right) {
  if(left < right) {
    let mid = parseInt((left + right)/2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
```

function solution(arr) {
  let current = [...arr]; // 현재 상태 (초기 arr(0))
  let x = 0;             // 몇 번 반복했는지 카운트

  while (true) {
    // 1) current 배열에 규칙 1회 적용 → next
    const next = transform(current);

    // 2) next와 current가 같다면 종료
    if (isSameArray(current, next)) {
      return x;
    }

    // 3) 아직 다르다면, current를 업데이트하고 반복횟수 x+1
    current = next;
    x++;
  }
}

// 규칙 1회 적용 함수
// (50 이상 짝수면 /2, 50 미만 홀수면 *2+1, 나머지는 변경 없음)
function transform(arr) {
  const newArr = [...arr]; // 원본 복사
  for (let i = 0; i < newArr.length; i++) {
    let val = newArr[i];
    if (val >= 50 && val % 2 === 0) {
      newArr[i] = val / 2;
    } else if (val < 50 && val % 2 === 1) {
      newArr[i] = val * 2 + 1;
    }
    // 그 외 조건이면 변경 없음
  }
  return newArr;
}

// 두 배열이 완전히 동일한지 비교
function isSameArray(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function solution(nums) {
  let answer = 0;

  // 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false; // 1과 0은 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 소수일 때만 true 반환
  }

  // 세 개의 숫자 조합으로 합 계산
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++; // 소수이면 카운트 증가
        }
      }
    }
  }

  return answer;
}
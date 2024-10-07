function solution(number, limit, power) {
    var answer = 0;

    // 1부터 number까지 각각의 숫자의 약수의 개수 계산
    for (let i = 1; i <= number; i++) {
        let divisors = 0;
        
        // i의 약수를 구하는데 제곱근까지만 탐색
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                divisors++;  // j가 약수인 경우
                if (j !== i / j) {
                    divisors++;  // i/j도 약수일 경우, j와 i/j가 다르면 추가
                }
            }
        }
        
        // limit을 넘는 경우 power로 대체
        if (divisors > limit) {
            answer += power;
        } else {
            answer += divisors;
        }
    }

    return answer;
}

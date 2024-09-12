function solution(a, b, n) {
    var answer = 0;

    while (n >= a) {
        // 새로 받는 콜라의 개수
        let newCola = Math.floor(n / a) * b;
        // 받은 콜라를 총량에 누적
        answer += newCola;

        // 남은 빈병: 교환 후 남은 빈병과 새로 받은 콜라의 빈병을 합산
        n = (n % a) + newCola;
    }

    return answer;
}

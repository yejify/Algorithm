function solution(k, m, score) {
    // score를 내림차순으로 정렬
    score = score.sort((a, b) => b - a);
    
    // 가격 계산하기
    var answer = 0;

    // m개씩 묶어서 최저 점수를 기준으로 계산
    for (let i = 0; i < score.length; i += m) {
        // 남은 사과가 m개 이상일 때만 처리
        if (i + m <= score.length) {
            const box = score.slice(i, i + m); // m개씩 자르기
            const boxPrice = Math.min(...box) * m; // 묶음의 최저 점수 * m
            answer += boxPrice;
        }
    }

    return answer;
}
function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counts = Array(7).fill(0); // 주사위 값은 1~6

    // 주사위 값 빈도 계산
    for (let num of dice) {
        counts[num]++;
    }

    // 빈도와 값 추출
    const unique = [];
    for (let i = 1; i <= 6; i++) {
        if (counts[i] > 0) unique.push([i, counts[i]]);
    }
    unique.sort((a, b) => b[1] - a[1]); // 빈도 내림차순 정렬

    // 조건에 따른 점수 계산
    if (unique[0][1] === 4) {
        // 모두 같은 경우
        return 1111 * unique[0][0];
    } else if (unique[0][1] === 3) {
        // 세 개 같음
        const p = unique[0][0];
        const q = unique[1][0];
        return Math.pow(10 * p + q, 2);
    } else if (unique[0][1] === 2 && unique[1][1] === 2) {
        // 두 개씩 같은 경우
        const p = unique[0][0];
        const q = unique[1][0];
        return (p + q) * Math.abs(p - q);
    } else if (unique[0][1] === 2) {
        // 두 개 같고 나머지 다름
        const q = unique[1][0];
        const r = unique[2][0];
        return q * r;
    } else {
        // 모두 다름
        return Math.min(...dice);
    }
}

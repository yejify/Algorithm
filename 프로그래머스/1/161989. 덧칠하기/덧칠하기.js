function solution(n, m, section) {
    let answer = 0;
    let i = 0;

    while (i < section.length) {
        // 페인트를 칠해야 할 첫 번째 구역부터 시작
        const start = section[i];
        
        // 롤러가 덧칠할 수 있는 최대 구역을 커버함
        answer++; // 페인트칠 횟수 증가
        i++; // 시작점에서 덧칠

        // 현재 롤러가 커버하는 범위를 벗어난 첫 번째 구역으로 이동
        while (i < section.length && section[i] < start + m) {
            i++;
        }
    }

    return answer;
}

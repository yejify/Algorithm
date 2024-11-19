function solution(s) {
    let count = 0; // 분리된 문자열의 개수
    let countX = 0; // 기준 문자 x의 개수
    let countOther = 0; // x가 아닌 문자의 개수
    let currentChar = ''; // 현재 기준 문자

    for (let i = 0; i < s.length; i++) {
        if (currentChar === '') {
            // 기준 문자 설정
            currentChar = s[i];
        }

        if (s[i] === currentChar) {
            countX++;
        } else {
            countOther++;
        }

        // 기준 문자와 다른 문자의 수가 같아질 때 분리
        if (countX === countOther) {
            count++;
            countX = 0;
            countOther = 0;
            currentChar = ''; // 다음 분리를 위해 초기화
        }
    }

    // 마지막 남은 부분이 있다면 추가
    if (countX > 0 || countOther > 0) {
        count++;
    }

    return count;
}

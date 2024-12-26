function solution(arr) {
    let first = -1;
    let last = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            if (first === -1) {
                first = i;
            }
            last = i;
        }
    }

    // 이제 모든 반복을 마친 뒤 검사
    if (first === -1) {
        // 2가 하나도 없었다면 [-1]
        return [-1];
    }

    // 첫 2부터 마지막 2까지 슬라이스
    return arr.slice(first, last + 1);
}

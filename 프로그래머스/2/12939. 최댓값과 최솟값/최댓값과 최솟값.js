function solution(s) {
    // 숫자 배열로 변경
    let num = s.split(' ');

    // 배열의 요소를 숫자 타입으로 변환
    for (let i = 0; i < num.length; i++) {
        num[i] = parseInt(num[i]);
    }

    // 최솟값과 최댓값 찾기
    const min = Math.min(...num);
    const max = Math.max(...num);

    // 최솟값과 최댓값을 문자열로 반환
    return `${min} ${max}`;
}

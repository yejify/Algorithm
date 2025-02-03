function solution(s) {
    let count = 0;
    let remove = 0;
    
    while(s!=='1'){
    // a. 현재 문자열 s의 길이와, 0을 제거한 후의 문자열을 구한다.
        let afterStr = s.split('').filter(ch => ch !== '0').join('')
    // b. 제거된 0의 갯수를 (s.length - (0 제거 후 문자열).length) 만큼 누적한다.
        remove += s.length - afterStr.length
    // c. 새로운 s를, (0 제거 후 문자열의 길이)를 이진 문자열로 변환한 값으로 갱신한다.
        s = (afterStr.length).toString(2)
    // d. 변환 횟수를 1 증가시킨다.
        count++
    }

    return [count, remove]
}
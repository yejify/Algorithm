function solution(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        // 50 이상 & 짝수
        if (num >= 50 && num % 2 === 0) {
            result.push(num / 2);
        }
        // 50 미만 & 홀수
        else if (num < 50 && num % 2 === 1) {
            result.push(num * 2);
        }
        // 그 외의 경우는 변경 없이 그대로
        else {
            result.push(num);
        }
    }

    return result;
}

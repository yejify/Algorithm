function solution(s, n) {
    var answer = s.split('');
    for(let i = 0; i < answer.length; i++) {
        let charCode = answer[i].charCodeAt();

        // 대문자 범위 체크 (A-Z)
        if (charCode >= 65 && charCode <= 90) {
            charCode += n;
            if (charCode > 90) {
                charCode -= 26;
            }
        } 
        // 소문자 범위 체크 (a-z)
        else if (charCode >= 97 && charCode <= 122) {
            charCode += n;
            if (charCode > 122) {
                charCode -= 26;
            }
        }

        answer[i] = String.fromCharCode(charCode);
    }
    return answer.join('');
}
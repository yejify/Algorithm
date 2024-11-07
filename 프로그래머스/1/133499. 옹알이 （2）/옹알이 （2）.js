function solution(babbling) {
    let sound = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    babbling.forEach(word => {
        let prevSound = "";
        let isValid = true;

        while (word.length > 0) {
            let matched = false;

            for (let s of sound) {
                if (word.startsWith(s) && prevSound !== s) {
                    prevSound = s; // 이전 발음을 저장
                    word = word.slice(s.length); // 일치하는 단어를 제거
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            answer++;
        }
    });

    return answer;
}

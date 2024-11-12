function solution(keymap, targets) {
    let minKeyPresses = {};

    // keymap을 순회하며 각 문자가 나오는 최소 횟수를 기록
    keymap.forEach((key, index) => {
        for (let i = 0; i < key.length; i++) {
            let char = key[i];
            if (!(char in minKeyPresses) || i + 1 < minKeyPresses[char]) {
                minKeyPresses[char] = i + 1; // 최소 키 누름 횟수 저장
            }
        }
    });

    // targets에서 각 문자를 작성하기 위한 최소 키 누름 횟수 계산
    return targets.map(target => {
        let totalPresses = 0;

        for (let char of target) {
            if (minKeyPresses[char] === undefined) {
                return -1; // 문자를 만들 수 없는 경우
            }
            totalPresses += minKeyPresses[char]; // 최소 누름 횟수를 누적
        }

        return totalPresses;
    });
}

function solution(cards1, cards2, goal) {
    let idx1 = 0, idx2 = 0;  // cards1과 cards2의 인덱스를 각각 관리

    // goal 배열을 순회하면서 단어를 차례로 비교
    for (let word of goal) {
        // cards1에서 첫 번째 단어와 비교
        if (idx1 < cards1.length && word === cards1[idx1]) {
            idx1++;  // 맞다면 cards1에서 해당 단어를 사용하고 다음 단어로 넘어감
        }
        // cards2에서 첫 번째 단어와 비교
        else if (idx2 < cards2.length && word === cards2[idx2]) {
            idx2++;  // 맞다면 cards2에서 해당 단어를 사용하고 다음 단어로 넘어감
        }
        // 어느 곳에서도 맞지 않으면 "No" 반환
        else {
            return "No";
        }
    }

    // 모든 단어를 순차적으로 맞췄다면 "Yes" 반환
    return "Yes";
}

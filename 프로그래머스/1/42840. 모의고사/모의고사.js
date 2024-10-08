function solution(answers) {
    // 수포자들의 찍는 패턴
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 각 수포자가 맞힌 문제 수
    const scores = [0, 0, 0];
    
    // 정답 배열(answers)을 순회하면서 각 수포자의 답과 비교
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === person1[i % person1.length]) scores[0]++;
        if (answers[i] === person2[i % person2.length]) scores[1]++;
        if (answers[i] === person3[i % person3.length]) scores[2]++;
    }
    
    // 가장 높은 점수를 찾음
    const maxScore = Math.max(...scores);
    
    // 가장 높은 점수를 받은 수포자를 배열에 담음
    const result = [];
    scores.forEach((score, index) => {
        if (score === maxScore) {
            result.push(index + 1);  // 수포자는 1번, 2번, 3번이므로 인덱스 + 1
        }
    });
    
    return result;  // 오름차순으로 정렬된 결과 반환
}
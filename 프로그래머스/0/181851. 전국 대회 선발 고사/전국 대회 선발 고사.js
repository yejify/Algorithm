function solution(rank, attendance) {
    // 참여 가능한 학생들 중에서 등수와 번호를 함께 묶어 새로운 배열 생성
    let students = rank
        .map((r, i) => ({ rank: r, index: i })) // 등수와 번호를 객체로 저장
        .filter((_, i) => attendance[i]) // 참여 가능한 학생들만 필터링
        .sort((a, b) => a.rank - b.rank); // 등수 순으로 정렬

    // 상위 3명 선택
    const [a, b, c] = students.slice(0, 3).map(s => s.index);

    // 최종 결과 계산
    return 10000 * a + 100 * b + c;
}

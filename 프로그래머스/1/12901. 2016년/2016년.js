function solution(a, b) {
    // 2016년 각 월의 일수 (윤년이므로 2월은 29일)
    const daysInMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // 요일 배열 (SUN부터 시작)
    const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    // 1월 1일은 금요일이므로 첫 번째 날부터 몇 일이 지났는지 계산
    let totalDays = 0;
    
    // 1월부터 a월까지의 일수를 더함
    for (let i = 1; i < a; i++) {
        totalDays += daysInMonth[i];
    }
    
    // 현재 달의 일수(b)를 더함
    totalDays += b;

    // 1월 1일은 금요일(5번째 요일)이므로
    // 금요일 기준으로 계산
    return dayOfWeek[(totalDays + 4) % 7];
}

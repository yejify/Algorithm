function solution(n) {
    let num = String(n).split("")
    let answer= num.map(Number)
    return answer.reverse();
}
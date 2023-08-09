function solution(a, d, included) {
    let answer = [a];
    for(let i = 1; i<included.length; i++){
        answer[i] = answer[i - 1] + d
    }
    return answer.reduce((acc, cur, idx) => included[idx] ? acc+cur : acc , 0);
}
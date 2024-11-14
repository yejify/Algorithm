function solution(num_str) {
    var answer = num_str.split('')
    return answer.reduce((acc,cur)=>Number(acc)+Number(cur), 0);
}
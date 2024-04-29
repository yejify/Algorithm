function solution(slice, n) {
    var answer = n/slice<=0?1:(n%slice===0?n/slice:Math.ceil(n/slice));
    
    return answer;
}
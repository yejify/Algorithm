function solution(arr, divisor) {
    var answer = [];
    arr.map((i)=>{i%divisor===0?answer.push(i):null});
    answer.length===0?answer.push(-1):answer.sort((a,b)=>a-b);
    return answer;
}
function solution(a, b) {
    let num = [];
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    
    for(let i=0;i+min<=max;i++){
    num.push(i+min)}
    
    return num.reduce((acc,cur)=>acc+cur,0);
}
function solution(n) {
    let num = String(n).split('').map(Number);
    num.sort((a,b)=>b-a)
    return parseInt(num.join(''));
}
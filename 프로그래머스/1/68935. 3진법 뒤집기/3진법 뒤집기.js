function solution(n) {
    let answer=0
    let num = []
    while(n>2){
        num.unshift(n%3)
        n = Math.floor(n/3)
    }
    num.unshift(n)
    for(let i=0;i<num.length;i++){
        answer += num[i]*(3**i)
    }
    return answer
}
function solution(price, money, count) {
    let answer = 0;
    
    for(let i=0;i<count;i++){
        answer += price*(i+1)
    }
    
    return money - answer >= 0 ? 0 : answer - money
}
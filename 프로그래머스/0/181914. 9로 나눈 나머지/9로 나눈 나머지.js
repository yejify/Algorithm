function solution(number) {
    var answer = 0;
    let num = Number(number)
    if(num>0){
        let sum = number.split('')
        answer = sum.reduce((a,b)=>parseInt(a)+parseInt(b),0)
        
    }
    if(answer<9){
        return answer;
    }else{
        return answer%9
    }
}
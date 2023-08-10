function solution(a, b, c) {
    var answer = 0;
    if(a === b && b === c){
        answer = (a+b+c)*(a*a+b*b+c*c)*(a**3+b**3+c**3)
    }else if(a === b || b === c || a===c){
        answer = (a+b+c)*(a*a+b*b+c*c)
    }else{
        answer = a+b+c
    }
    return answer;
}
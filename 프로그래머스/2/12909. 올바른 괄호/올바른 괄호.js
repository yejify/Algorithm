function solution(s){
    let count=0;
    let str = s.split('')
    
    for(let i=0; i<str.length;i++){
        if(str[i] === '('){
            count++
        }else{
            count--;
            if(count<0) return false;
        }
    }
    return count === 0
}
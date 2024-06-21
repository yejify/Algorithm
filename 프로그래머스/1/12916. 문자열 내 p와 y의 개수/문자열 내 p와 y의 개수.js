function solution(s){
    let num1 = 0;
    let num2 = 0;
for(let i=0;i<s.length;i++){
    if(s[i]==='p'||s[i]==='P'){
        num1++
    }
    else if(s[i]==='y'||s[i]==='Y'){
        num2++
    }
}
    return num1!==num2? false: true
}
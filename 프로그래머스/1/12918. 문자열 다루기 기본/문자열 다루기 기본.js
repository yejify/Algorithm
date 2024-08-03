function solution(s) {
    let str = s.split("")
    let num = 1;
    if(str.length === 4){
        num -= 1
    }else if(str.length === 6){
        num -= 1
    }
    for(let i=0;i<str.length;i++){
        isNaN(str[i]) === true ? num += 1 : num
    }
    return num === 0 ?true:false
}
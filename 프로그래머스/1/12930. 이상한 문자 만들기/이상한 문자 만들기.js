function solution(s) {
    var answer = s.split(' ');
    for(let i=0; i<answer.length;i++){
        let str = answer[i].split('')
        for(let j=0; j<str.length;j++){
            if(j%2===0){
                str[j]=str[j].toUpperCase()
            }else{
                str[j]=str[j].toLowerCase()
                
            }
        }
        answer[i]=str.join('')
    }
    return answer.join(' ');
}
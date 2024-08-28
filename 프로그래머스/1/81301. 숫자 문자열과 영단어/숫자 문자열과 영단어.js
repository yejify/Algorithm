function solution(s) {
    let num=['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine']
    var answer = [];
    let str=s.split('');
    for(let i=0;i<str.length;i++){
        //숫자일때
        if(!isNaN(str[i])){
           answer.push(str[i])
           }
        //문자일때
        if(isNaN(str[i])){
  
            for(let j=0;j<num.length;j++){
                //두번째까지 일치하는지 검사
                if(str[i]===num[j][0] && str[i+1]===num[j][1]){
                    answer.push(num.indexOf(num[j]))
                    i = i+num[j].length -1
                }
                }

            }
        }
    return Number(answer.join(''));
}
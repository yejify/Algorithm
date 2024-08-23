function solution(s) {
    let str = s.split('');
    var answer = [];
    for(let i=0; i<str.length;i++){
        let found=false;
        for(let j=i-1; j>=0;j--){
            if(str[i]===str[j]){
                answer.push(i-j);
                found=true;
                break;
            }
        }
    if(!found){
        answer.push(-1);
    }
    }
    return answer;
}
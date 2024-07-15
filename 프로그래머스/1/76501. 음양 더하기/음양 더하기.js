function solution(absolutes, signs) {
    let answer=[];
    for(let i=0;i<absolutes.length;i++){
        answer[i]=signs[i]===true?absolutes[i]:-absolutes[i];
    }
    return answer.reduce((acc, cur)=>acc+cur,0);
}
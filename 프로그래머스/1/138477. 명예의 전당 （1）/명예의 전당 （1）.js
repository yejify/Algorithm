function solution(k, score) {
    let answer = [];
    let temp = []
    for(let i=0;i<score.length;i++){
        temp.push(score[i])
        temp.sort((a,b)=>b-a)
        if(temp.length>k){
            temp.pop()
        }
        if(i<k){
            answer.push(temp[i])
        }else{
        answer.push(temp[k-1])
        }
        
    }
    return answer;
}

//스코어가 들어옴 -> 명예의 전당이 k이하이면-> 정렬해서 가장 작은 수 발표점수 넣기
//스코어가 들어옴 -> 명예의 전당이 k 초과이면-> 정렬해서 가장 작은 수 제거 -> 가장 작은 수 발표점수에 넣기
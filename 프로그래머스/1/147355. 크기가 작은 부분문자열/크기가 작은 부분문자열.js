function solution(t, p) {
    var answer = [];
    let length = p.slice().length
    for(let i=0;i<t.slice().length-length+1;i++){
        if(t.slice(i,i+length)<=p){
            answer.push(t.slice(i,i+length))
        }
    }
    return answer.length;
}
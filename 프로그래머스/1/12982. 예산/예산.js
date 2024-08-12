function solution(d, budget) {
    let answer = d.sort((a,b)=>(a-b))
    let sum=0
    for(let i=d.length;i>0;i--){
        sum = answer.reduce((acc,cur)=>(acc+cur),0)
        if(sum>budget){
            answer.pop(d[i])
        }
    }
        return answer.length
}
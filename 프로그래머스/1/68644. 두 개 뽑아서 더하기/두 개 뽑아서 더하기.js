function solution(numbers) {
    var answer = [];
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<numbers.length;j++){
            let sum=numbers[i]+numbers[j]
            if(i===j){
                break
            }if(!answer.includes(sum))
            answer.push(sum)
        }
    }
    return answer.sort((a,b)=>a-b);
}
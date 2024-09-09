function solution(food) {
    let answer = [];
    for(let i = 1; i<food.length;i++){
            answer.push(String(i).repeat(parseInt(food[i]/2)))
        }
    let reverseA = [...answer].reverse()
    answer.push(0)
    answer = answer.concat(reverseA)
    return answer.join('');
}
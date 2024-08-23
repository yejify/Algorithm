function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length;i++){
        let [j, k, l] = commands[i]
        answer.push(array.slice(j-1,k).sort((a, b) => a - b)[l-1])
    }
    return answer;
}
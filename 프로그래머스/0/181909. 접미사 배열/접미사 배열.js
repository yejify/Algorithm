function solution(my_string) {
    var answer = [];
    let end = my_string.split('').length
    for(let i=0; i<end;i++){
       answer.push(my_string.slice(i))
    }
    return answer.sort();
}
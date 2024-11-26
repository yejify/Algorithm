function solution(my_string, index_list) {
    var answer = [];
    for(let i=0; i<index_list.length;i++){
        let str = index_list[i]
        answer.push(my_string[str])
    }
    return answer.join('');
}
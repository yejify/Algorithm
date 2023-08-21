function solution(num_list) {
    var answer = [];
    let end = num_list.length - 1
    if(num_list[end] > num_list[end-1]){
        let last = num_list[end]-num_list[end-1]
        answer =[...num_list,last]
    }else if(num_list[end] <= num_list[end - 1]){
               let last = num_list[end]*2
        answer =[...num_list,last] 
    }
    return answer;
}
function solution(numbers) {
    var answer = 0;
    for(let i = 0;i<=numbers.length-1;i++){
        answer=answer+numbers[i];
    }
    return answer/numbers.length;
}
function solution(array) {
    let answer;
    for(let i=0; i<array.length;i++){
        let min = i;
        for(let j=i+1; j<array.length;j++){
            if(array[j]<array[min]) min =j;
        }
        [array[i], array[min]] = [array[min], array[i]];
    }
    answer = array[parseInt(array.length / 2)];
    return answer;
}
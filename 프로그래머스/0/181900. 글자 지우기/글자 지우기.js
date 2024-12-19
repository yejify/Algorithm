function solution(my_string, indices) {
    const toRemove = new Set(indices);
    let result = ''
    
    for(let i=0; i<my_string.length; i++){
        if(!toRemove.has(i)){
            result+=my_string[i];
        }
    }
    return result;
}
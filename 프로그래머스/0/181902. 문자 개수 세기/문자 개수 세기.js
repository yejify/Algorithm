function solution(my_string) {
    const counts = Array(52).fill(0);
    for(let char of my_string){
        const code = char.charCodeAt(0);
        
        let index;
        
        if(code>='A'.charCodeAt(0) && code<='Z'.charCodeAt(0)){
            index = code - 'A'.charCodeAt(0);
        }else{
            index = (code - 'a'.charCodeAt(0)) + 26;
        }
        counts[index]++;
    }
    return counts;
}
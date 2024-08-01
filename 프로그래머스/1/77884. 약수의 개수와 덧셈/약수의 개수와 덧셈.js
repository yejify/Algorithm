function solution(left, right) {
    let sum=0;
    for(let i=left; i<=right;i++){
        let divisorCount = 0
        for(let j=1; j<=i;j++){
           if(i%j === 0)divisorCount++
        }
        divisorCount%2 ===0?sum+=i:sum-=i
    }
    return sum;
}
function solution(n) {
    let sum=0;
for(let i=0;i<n;i++){
    if(n%(i+1)===0){
        sum=sum+(i+1)
    }
}
    return sum
}
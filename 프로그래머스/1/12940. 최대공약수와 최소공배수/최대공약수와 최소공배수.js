function solution(n, m) {
    let nm = n*m;
    let r
    while(m!==0){
        r =n%m
        n=m
        m=r
    }
    return [n, nm/n]
}
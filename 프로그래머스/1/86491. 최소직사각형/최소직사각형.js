function solution(sizes) {
    let w = [];
    let h = [];
    for(let i=0; i<sizes.length;i++){
        sizes[i] = sizes[i].sort((a,b)=>b-a)
        w[i] = sizes[i][0]
        h[i] = sizes[i][1]
    }
    return Math.max(...w)*Math.max(...h)
}
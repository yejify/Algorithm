function solution(arr) {
    let min = Math.min(...arr)
    for(let i=0;i<arr.length;i++){
        if(arr[i]===min){
            arr.splice(i,1)
        }
    }
    return arr.length===0?[-1]:arr
}
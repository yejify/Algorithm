function solution(s) {
    let str = s.split('')
    let strLeng = str.length
    return strLeng%2===0?str[(strLeng/2)-1] + str[(strLeng/2)] : str[Math.floor(strLeng/2)]
}
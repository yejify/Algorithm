function solution(num)
{
    let str=String(num).split('')
    let sum = str.reduce((acc,str)=>acc+Number(str),0);
    return sum
}
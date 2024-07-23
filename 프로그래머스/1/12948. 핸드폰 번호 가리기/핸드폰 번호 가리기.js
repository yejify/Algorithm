function solution(phone_number) {
    //문자를 배열로 바꿔
        let num = phone_number.split('')
    //뒤에서부터 4개까지 잘라
       let answer = num.slice(num.length - 4)
    //자른 거 빼고 전부 *로 바꿔
       num = num.slice(0,-4)
    for(let i = 0; i<num.length;i++){
        num[i]='*'
    }
    //그거랑 4개랑 합쳐서 문자로 바꿔
    answer=[...num, ...answer]
    return answer.join().replace(/,/g, '')
}
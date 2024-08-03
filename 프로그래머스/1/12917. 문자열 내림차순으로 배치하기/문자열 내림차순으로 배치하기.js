function solution(s) {
   let str = s.split('')
   let answer = ""
   for(let i=0;i<str.length;i++){
       str[i] = str[i].charCodeAt()
   }
    str = str.sort((a,b)=>b-a)
    answer = str.map((i)=>String.fromCharCode(i))
    
    return answer.join('');
}
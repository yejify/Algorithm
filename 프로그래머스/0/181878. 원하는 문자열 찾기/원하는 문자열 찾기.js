function solution(myString, pat) {
   let answer = myString.toLowerCase().includes(pat.toLowerCase())
   return answer ? 1 : 0
}
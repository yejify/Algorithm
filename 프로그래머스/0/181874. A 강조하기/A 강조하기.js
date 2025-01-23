function solution(myString) {
  return [...myString].map(ch => 
    ch === 'a'
      ? 'A'
      : (ch === 'A' ? 'A' : ch.toLowerCase())
  ).join('');
}
function solution(name, yearning, photo) {
    var answer = [];
    
    //이름이랑 그리움 점수 객체로 만들기
    const nameMap = new Map();
    
    name.forEach((n,i)=>{
        nameMap.set(n, yearning[i])
    })
    
    //사진별로 이름찾아서 그리움 점수 더하기
    for(let i=0;i<photo.length;i++){
        let temp=0;
        for(let j=0;j<photo[i].length;j++){
          temp += nameMap.get(photo[i][j]) || 0
        }
        answer.push(temp)
    }
    
    //그리움 점수 리턴하기    
    return answer;
}
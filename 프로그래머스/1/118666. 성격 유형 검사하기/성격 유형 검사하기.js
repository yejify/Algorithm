function solution(survey, choices) {
    const score = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    for(let i = 0; i < survey.length; i++){
        let [type1, type2] = survey[i].split('')
        let choice = choices[i]
        
        if(choice<4){
            score[type1] += 4 - choice
        }else if(choice>4){
            score[type2] += choice - 4
        }
    }

    let answer = '';
    answer += score['R'] >= score['T'] ? 'R' : 'T';
    answer += score['C'] >= score['F'] ? 'C' : 'F';
    answer += score['J'] >= score['M'] ? 'J' : 'M';
    answer += score['A'] >= score['N'] ? 'A' : 'N';
    
    return answer;
}
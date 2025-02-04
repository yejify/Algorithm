function solution(myString, pat) {
    const regex = new RegExp(`(?=${pat})`,'g');
    const matches = myString.match(regex);
    
    return matches ? matches.length : 0;
}
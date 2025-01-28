function solution(myString, pat) {
    const idx = myString.lastIndexOf(pat);
    
    if (idx === -1) {
        return "";
    }
    
    return myString.substring(0, idx + pat.length);
}

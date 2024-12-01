function solution(intStrs, k, s, l) {
    return intStrs.map(str=>parseInt(str.substr(s,l))).filter(num=>num>k);
}
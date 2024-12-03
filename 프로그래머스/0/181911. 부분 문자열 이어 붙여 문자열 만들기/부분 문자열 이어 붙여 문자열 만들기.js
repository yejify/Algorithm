function solution(my_strings, parts) {
    return my_strings.reduce((acc, str, i)=>
        acc + str.substring(parts[i][0],parts[i][1]+1),
    '')
}
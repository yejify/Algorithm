function solution(my_string, m, c) {
    return my_string.split('').filter((_, idx) => idx % m === c - 1).join('');
}
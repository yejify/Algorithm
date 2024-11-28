function solution(my_string, queries) {
    let strArray = [...my_string];

    queries.forEach(([s, e]) => {
        const reversed = strArray.slice(s, e + 1).reverse();
        strArray.splice(s, e - s + 1, ...reversed);
    });

    return strArray.join('');
}

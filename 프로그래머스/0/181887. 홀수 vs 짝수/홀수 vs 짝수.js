function solution(num_list) {
  const sumOdd = num_list
    .filter((_, i) => i % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);

  const sumEven = num_list
    .filter((_, i) => i % 2 === 1)
    .reduce((acc, cur) => acc + cur, 0);

  return Math.max(sumOdd, sumEven);
}

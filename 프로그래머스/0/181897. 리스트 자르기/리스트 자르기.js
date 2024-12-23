function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      // 0번 인덱스부터 b번 인덱스까지
      return num_list.slice(0, b + 1);

    case 2:
      // a번 인덱스부터 끝까지
      return num_list.slice(a);

    case 3:
      // a번 인덱스부터 b번 인덱스까지
      return num_list.slice(a, b + 1);

    case 4:
      // a번 인덱스부터 b번 인덱스까지 c 간격
      // slice로 범위를 잘라낸 후, filter로 간격 처리
      return num_list
        .slice(a, b + 1)
        .filter((_, idx) => idx % c === 0);

    default:
      return [];
  }
}

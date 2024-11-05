function solution(n) {
    if (n < 2) return 0;

    const isPrime = Array.from({ length: n + 1 }, (_, i) => i > 1);
    
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((count, prime) => count + prime, 0);
}

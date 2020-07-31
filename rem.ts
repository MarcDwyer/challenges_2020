function subarraysDivByK(A: number[], K: number): number {
  const d: number[] = [K];
  let count = 0;
  let sum = 0;

  for (const num of A) {
    sum += num;
    let mod = sum % K;

    if (mod < 0) {
      mod = K + mod;
    }
    count += d[mod] || 0;

    if (mod === 0) {
      ++count;
    }
    ++d[mod];
  }
  return count;
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
console.log(subarraysDivByK([-5], 5));
console.log(subarraysDivByK([-1, 2, 9], 5));

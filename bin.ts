export function countBits(n: number) {
  // Program Me
  return n
    .toString(2)
    .split("")
    .reduce((n: number, bin) => (n += Number(bin)), 0);
}

console.log(countBits(3313094953241251));

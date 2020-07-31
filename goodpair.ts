function numSub(str: string): number {
  const total = str.split("").reduce((tot, n) => (tot += Number(n)), 0);
  return total;
}

console.log(numSub("0110111"));
//9

var numSub1 = function (s) {
  let total = 0;
  let current = 0;
  for (let char of s) {
    if (char === "0") {
      total += (current * (current + 1)) / 2;
      current = 0;
    } else {
      current++;
    }
  }
  if (current) {
    total += (current * (current + 1)) / 2;
  }
  return total % (Math.pow(10, 9) + 7);
};

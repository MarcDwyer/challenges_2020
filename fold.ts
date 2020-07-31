export function foldArray(array: number[], runs: number): number[] {
  for (let x = 0; x < runs; x++) {
    const middle = Math.round(array.length / 2);
    const first = array.slice(0, middle);
    const second = array.slice(middle, array.length).reverse();

    const [less, greater] =
      first.length > second.length ? [second, first] : [first, second];
    console.log({ less, greater });
    const result: number[] = [];
    for (let y = 0; y < greater.length; y++) {
      if (less[y]) {
        result.push(less[y] + greater[y]);
      } else {
        result.push(greater[y]);
      }
    }
    array = result;
  }
  return array;
}

console.log(foldArray([1, 2, 3, 4, 5], 1));

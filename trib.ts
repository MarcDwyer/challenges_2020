function trib(
  nums: [number, number, number],
  num: number,
  index = 0
): number[] {
  let next = 0;
  for (let i = index; i < nums.length; i++) {
    const n = nums[i];
    if (n === num) {
      console.log("hit", i, nums);
      return [
        nums[nums.length - 3],
        nums[nums.length - 2],
        nums[nums.length - 1],
      ];
    }
    next += n;
  }
  nums.push(next);
  return trib(nums, num, nums.length - 3);
}

function tribonacci(nums: [number, number, number], num: number): number[] {
  let next = 0;
  const index = nums.length - 3;
  for (let i = index; i < nums.length; i++) {
    const n = nums[i];
    if (n === num) {
      console.log("hit", i, nums);
      return nums.slice(index, nums.length);
    }
    next += n;
  }
  nums.push(next);
  return tribonacci(nums, num);
}
console.log(tribonacci([1, 1, 1], 9));

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;
  let count: number = 0;
  let prod: number = 1;
  let l: number = 0;
  for (let r: number = 0; r < nums.length; r++) {
    prod = prod * nums[r];
    while (prod >= k) {
      // keep shrinking the window
      prod = prod / nums[l];
      l++;
    }
    count += r - l + 1;
  }
  return count;
}
console.log(numSubarrayProductLessThanK([1, 2, 3], 2));

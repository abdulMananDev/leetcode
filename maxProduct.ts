function minOf(a: number, b: number) {
  return a < b ? a : b;
}
function maxOf(a: number, b: number) {
  return a > b ? a : b;
}
function maxProduct(nums: number[]): number {
  let min: number = 1;
  let max: number = 1;
  let result: number = -Infinity;
  function calc(i: number) {
    let minProd = min * nums[i];
    min = minOf(nums[i], minProd);
    let maxProd = max * nums[i];
    max = maxOf(nums[i], maxProd);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      calc(i);
    } else {
      // swap
      let temp = min;

      min = max;
      max = temp;
      calc(i);
    }

    result = maxOf(result, max);
  }
  console.log(result, "res");
  return result;
}

function productExceptSelf(nums: number[]): number[] {
  let answer: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      answer.push(1);
    } else {
      answer.push(nums[i - 1] * answer[i - 1]);
    }
  }

  let product: number = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= product;
    product *= nums[i];
  }

  return answer;
}
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

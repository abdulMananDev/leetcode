let nums = [2, 3, 4, 5, 1];

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let midOne: number = Math.floor((left + right) / 2);
    console.log(midOne);

    if (nums[midOne] > nums[right]) left = midOne + 1;
    else right = midOne;
  }

  return nums[left];
}
let m = findMin(nums);
console.log(m, "min");

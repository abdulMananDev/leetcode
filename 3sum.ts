// // step1 sort

// function sorter(num: number[]): number[] {
//   return num.sort((a, b) => a - b);
// }
// // make 3 sum 2 sum

// function twoSumFixed(nums: number[]): number[][] {
//   let left = 0;
//   let right = nums.length - 1;
//   let answer = [];
//   nums = sorter(nums);
//   console.log(nums);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) break;
//     left = i + 1;
//     while (left < right) {
//       if (nums[i] - (nums[left] + nums[right]) === 0) {
//         answer.push([nums[i], nums[left], nums[right]]);
//       } else if (nums[left] + nums[right] > nums[i]) {
//         right = right - 1;
//       } else if (nums[left] + nums[right] < nums[i]) {
//         left = left + 1;
//       }
//     }
//   }
//   return answer;
// }

// console.log(twoSumFixed([-1, 0, 1, 2, -1, 4]));

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const answer: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break; // no triplet can reach 0
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate fixed value

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        answer.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
      } else if (sum > 0) {
        right--; // too big, need a smaller number
      } else {
        left++; // too small, need a bigger number
      }
    }
  }

  return answer;
}

console.log(threeSum([-1, 0, 1, 2, -1, 4])); // [[-1,-1,2],[-1,0,1]]

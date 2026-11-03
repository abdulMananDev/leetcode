function findBoundary(
  type: boolean,
  left: number,
  right: number,
  nums: number[],
  target: number,
): number {
  let occ: number = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      occ = mid;
      type ? (right = mid - 1) : (left = mid + 1);
    }
  }
  return occ;
}

function searchRange(nums: number[], target: number): number[] {
  let res: number[] = [];
  let right: number = nums.length - 1;

  let firstOcc = findBoundary(true, 0, right, nums, target);

  if (firstOcc == -1) return [-1, -1];

  let lastOcc = findBoundary(false, firstOcc, right, nums, target);

  res.push(firstOcc, lastOcc);

  return res;
}

console.log(searchRange([8], 8));

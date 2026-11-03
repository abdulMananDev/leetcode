// first sort nlogn
// then 2 loops n times n for plus while

function threeSum(arr: number[]): number[][] {
  arr = arr.sort((a: number, b: number) => a - b);

  let right: number = arr.length - 1;
  let left: number = 0;
  let sum: number = 0;
  let retArr: number[][] = [];
  for (let i: number = 0; i < arr.length - 1; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    left = i + 1;
    right = arr.length - 1;

    while (left < right) {
      sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        retArr.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return retArr;
}
console.log(threeSum([0, 0, 0]));

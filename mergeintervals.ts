function merge(nums: number[][]): number[][] {
  let sorted = nums.sort((a, b) => a[0] - b[0]);

  let last: number = 0;

  let merged: number[][] = [sorted[0]];

  for (let current: number = 1; current < sorted.length; current++) {
    last = merged.length - 1;

    if (merged[last][1] >= sorted[current][0]) {
      merged[last] = [
        merged[last][0],
        Math.max(merged[last][1], sorted[current][1]),
      ];
    } else {
      merged.push(sorted[current]);
    }
  }

  return merged;
}
console.log(
  merge([
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
  ]),
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ]),
);
console.log(
  merge([
    [4, 7],
    [1, 4],
  ]),
);
console.log(
  merge([
    [1, 2],
    [10, 9],
  ]),
);

function prefixArrayfn(nums: number[]): number[] {
  let prefixArr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixArr.push((sum += nums[i]));
  }
  return prefixArr;
}
function sum(nums: number[], k: number): number {
  let map: Map<number, number> = new Map();
  let count: number = 0;
  let prefixArr = prefixArrayfn(nums);

  for (let i = 0; i < prefixArr.length; i++) {
    if (prefixArr[i] === k) {
      count++;
    }

    let tbh = prefixArr[i] - k;

    if (map.has(tbh)) {
      count += map.get(tbh)!;
    }

    map.set(prefixArr[i], (map.get(prefixArr[i]) || 0) + 1);
  }
  return count;
}
console.log(sum([1, 2, 3], 3));

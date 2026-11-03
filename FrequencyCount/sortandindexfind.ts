// function sortAndFindIndex(arr: number[], target: number): number[] {
//   arr = arr.sort((a: number, b: number) => a - b);
//   let result: number[] = [];
//   for (let i: number = 0; i < arr.length; i++) {
//     if (arr[i] == target) result.push(i);
//   }
//   return result;
// }

// console.log(sortAndFindIndex([1, 2, 5, 2, 3], 2));

//optimized freq counter
function targetIndices(nums: number[], target: number): number[] {
  let smallerFreq = 0;
  let equalFreq = 0;
  let indicesArray: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      smallerFreq++;
    } else if (nums[i] === target) {
      equalFreq++;
    }
  }

  for (let j: number = smallerFreq; j < equalFreq + smallerFreq; j++) {
    indicesArray.push(j);
  }
  return indicesArray;
}

console.log(targetIndices([1, 4, 3, 4], 4));

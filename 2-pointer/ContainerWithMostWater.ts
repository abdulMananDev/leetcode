function water(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let answer = 0;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    answer = Math.max(answer, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return answer;
}

console.log(water([1, 8, 6, 2, 5, 4, 8, 3, 7]));

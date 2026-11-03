function lengthOfLongestSubstring(s: string): number {
  // we just need to return the length
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let mySet: Set<string> = new Set();
  while (right < s.length) {
    while (mySet.has(s[right])) {
      mySet.delete(s[left]);
      left++;
    }
    mySet.add(s[right]);

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
}
console.log(lengthOfLongestSubstring("pwwkew"));

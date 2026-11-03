function validPlaindrome(s: string): boolean {
  let left: number = 0;
  let right: number = s.length - 1;

  function isAlphaNum(char: string): boolean {
    return (
      (char >= "0" && char <= "9") ||
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z")
    );
  }
  console.log(right, left);
  while (left < right) {
    if (!isAlphaNum(s[left])) {
      left++;
      continue;
    }
    if (!isAlphaNum(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() == s[right].toLowerCase()) {
      right--;
      left++;
    } else return false;
  }

  return true;
}
console.log(validPlaindrome("A man, a plan, a canal: Panama"));

var isAnagram = function (s: string, t: string) {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (const ch of s) map.set(ch, (map.get(ch) || 0) + 1);

  for (const ch of t) {
    if (!map.get(ch)) return false; // missing or already 0
    map.set(ch, map.get(ch) - 1);
  }

  return true;
};
console.log(isAnagram("anagram", "nagparam"));

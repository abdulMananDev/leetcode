function sumOfSortableIntegers(nums: number[]): number {
  const n = nums.length;
  const sorted = [...nums].sort((a, b) => a - b);

  const BASE = 100003n;
  const MOD = 1000000007n;

  const maxLen = 2 * n + 5;

  const pow: bigint[] = Array(maxLen).fill(0n);
  pow[0] = 1n;

  for (let i = 1; i < maxLen; i++) {
    pow[i] = (pow[i - 1] * BASE) % MOD;
  }

  function buildHash(arr: number[]) {
    const h: bigint[] = Array(arr.length + 1).fill(0n);

    for (let i = 0; i < arr.length; i++) {
      h[i + 1] = (h[i] * BASE + BigInt(arr[i] + 1)) % MOD;
    }

    return h;
  }

  function getHash(pref: bigint[], l: number, r: number): bigint {
    return (pref[r + 1] - ((pref[l] * pow[r - l + 1]) % MOD) + MOD) % MOD;
  }

  const sortedHash = buildHash(sorted);

  let ans = 0;

  const divisors: number[] = [];

  for (let d = 1; d * d <= n; d++) {
    if (n % d === 0) {
      divisors.push(d);

      if (d !== n / d) {
        divisors.push(n / d);
      }
    }
  }

  for (const k of divisors) {
    let ok = true;

    for (let start = 0; start < n; start += k) {
      const block = nums.slice(start, start + k);
      const doubled = [...block, ...block];

      const dblHash = buildHash(doubled);

      const targetHash = getHash(sortedHash, start, start + k - 1);

      let found = false;

      for (let shift = 0; shift < k; shift++) {
        const curHash = getHash(dblHash, shift, shift + k - 1);

        if (curHash === targetHash) {
          found = true;
          break;
        }
      }

      if (!found) {
        ok = false;
        break;
      }
    }

    if (ok) ans += k;
  }

  return ans;
}

console.log(sumOfSortableIntegers([3, 1, 2]));

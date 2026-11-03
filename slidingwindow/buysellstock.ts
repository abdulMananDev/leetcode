function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let mProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      if (prices[right] - prices[left] > mProfit)
        mProfit = prices[right] - prices[left];

      right++;
    } else {
      left = right;
      right++;
    }
  }

  return mProfit;
}
console.log(maxProfit([2, 4, 1]));

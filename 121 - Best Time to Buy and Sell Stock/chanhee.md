You are given an array `prices` where `prices[i]` is the price of a given stock on the `i^th` day.

You want to maximize your profit by choosing **a single day** to buy one stock and choosing **a different day in the future** to sell that stock.

Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.

Example 1:

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

Example 2:

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

Constraints:

-   `1 <= prices.length <= 105`
-   `0 <= prices[i] <= 104`

---

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Third Solution
    // Time - O(n), Space - O(1)
    let profit = 0;
    let low = 10001;

    for (let i = 0; i < prices.length; i++) {
        low = Math.min(low, prices[i]);
        profit = Math.max(profit, prices[i] - low);
    }

    // Second Solution
    // Time - O(n), Space - O(n)
    // let profit = 0;
    // const maxPrices = [...prices];

    // for(let i = maxPrices.length - 2; i >= 0; i--) {
    //     maxPrices[i] = Math.max(maxPrices[i + 1], maxPrices[i]);
    // }

    // for(let i = 0; i < prices.length; i++) {
    //     profit = Math.max(profit, maxPrices[i] - prices[i]);
    // }

    // First Solution
    // O(n^2)
    // O(n log n)
    // We want to make Time - O(n), Space - O(n)
    // for(let i = 0; i < prices.length; i++) {
    //     for(let j = i + 1; j < prices.length; j++) {
    //         profit = Math.max(prices[j] - prices[i], profit);
    //     }
    // }

    return profit;
};
```

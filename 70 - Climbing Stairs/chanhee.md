You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

Example 1:

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

Example 2:

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

Constraints:

-   `1 <= n <= 45`

---

# Dynamic Progrmaming (Bottom-up) with Memoization

Top-down으로도 풀었지만 Bottom-up 코드 올림

```js
var climbStairs = function (n) {
    if (n <= 2) return n;
    const memo = Array(n + 1).fill(0);

    memo[1] = 1;
    memo[2] = 2;

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n];
};
```

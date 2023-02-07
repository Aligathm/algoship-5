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

# Dynamic Progrmaming (Top-down) with Memoization

찬찬히 강의 수강

```js
var climbStairs = function (n) {
    const memo = { 1: 1, 2: 2 };
    function climb(n) {
        if (memo[n]) return memo[n];
        else {
            memo[n] = climb(n - 1) + climb(n - 2);
            return memo[n];
        }
    }

    return climb(n);
};
```

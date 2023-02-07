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
<img width="1010" alt="스크린샷 2023-02-07 오후 11 51 17" src="https://user-images.githubusercontent.com/67771055/217278525-84513b4f-6994-4f3a-9863-3701a443ca95.png">

<img width="1031" alt="스크린샷 2023-02-07 오후 11 52 46" src="https://user-images.githubusercontent.com/67771055/217278899-406a7c37-38d7-4cee-ba37-b3fb613687bf.png">

<img width="1021" alt="스크린샷 2023-02-07 오후 11 53 13" src="https://user-images.githubusercontent.com/67771055/217278993-bde1845b-bef6-48e6-85da-a7c589beafbc.png">

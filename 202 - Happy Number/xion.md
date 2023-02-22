Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:

-   Starting with any positive integer, replace the number by the sum of the squares of its digits.
-   Repeat the process until the number equals 1 (where it will stay), or it _loops endlessly in a cycle_ which does not include 1.
-   Those numbers for which this process _ends in 1_ are happy.

Return `true` if `n` is _a happy number_, and `false` _if not_.

Example 1:

```
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

Example 2:

```
Input: n = 2
Output: false
```

Constraints:

-   `1 <= n <= 231 - 1`

---

# Hash

```js
var isHappy = function (n) {
    const squaresTable = {
        0: 0,
        1: 1,
        2: 4,
        3: 9,
        4: 16,
        5: 25,
        6: 36,
        7: 49,
        8: 64,
        9: 81,
    };

    const memoTable = new Set();

    while (n !== 1) {
        const nums = n.toString().split("");
        const num = nums.reduce((acc, cur) => acc + squaresTable[cur], 0);

        if (memoTable.has(num)) return false;
        memoTable.add(num);
        n = num;
    }

    return true;
};
```

---

# Two Pointer (Floyd Cycle Detection)

```js
var isHappy = function (n) {
    let slower = n;
    let faster = n;

    // 적어도 한번은 실행되어야 함
    do {
        slower = calculateSquaresByEachDigit(slower);
        faster = calculateSquaresByEachDigit(calculateSquaresByEachDigit(faster));
    } while (slower !== faster);

    if (slower === 1) return true;

    return false;
};

function calculateSquaresByEachDigit(n) {
    let result = 0;

    while (n > 0) {
        const digit = n % 10;
        result += digit * digit;
        n = Math.floor((n /= 10));
    }

    return result;
}
```

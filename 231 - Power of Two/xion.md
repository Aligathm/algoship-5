Given an integer `n`, return `true` _if it is a power of two. Otherwise, return_ `false`.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

<br>

### Example 1:

```
Input: n = 1
Output: true
Explanation: 20 = 1
```

### Example 2:

```
Input: n = 16
Output: true
Explanation: 24 = 16
```

### Example 3:

```
Input: n = 3
Output: false
```

<br>

**Constraints:**

-   `-231 <= n <= 231 - 1`

<br>

**Follow up:** Could you solve it without loops/recursion?

<br>

---

### Bit Manipulation

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    return !(n & (n - 1));
};
```

<br>

### Loop

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n < 0) return false;
    if (n === 1) return true;

    n = n.toString(2);
    return [...n].filter((e) => e == 1).length === 1;
};
```

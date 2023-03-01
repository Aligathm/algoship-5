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

```js
var isPowerOfTwo = function (n) {
    if (n < 1) return false;
    else if (n === 1) return true;

    let two = 2;

    while (true) {
        if (two === n) return true;
        else if (two > n) return false;

        two *= 2;
    }
};
```

---

```js
var isPowerOfTwo = function (n) {
    if (n < 1) return false;
    return !(n & (n - 1));
};
```

---

```js
var isPowerOfTwo = function (n) {
    if (n < 1) return false;

    let count = 0;

    while (n > 0) {
        const one = n & 1;
        if (one) count++;
        n = n >> 1;
        if (count > 1) return false;
    }

    return true;
};
```

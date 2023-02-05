Given two binary strings `a` and `b`, return _their sum as a binary string_.

Example 1:

```
Input: a = "11", b = "1"
Output: "100"
```

Example 2:

```
Input: a = "1010", b = "1011"
Output: "10101"
```

Constraints:

-   `1 <= a.length, b.length <= 104`
-   `a` and `b` consist only of `'0'` or `'1'` characters.
-   Each string does not contain leading zeros except for the zero itself.

---

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const reverseA = [...a].reverse();
    const reverseB = [...b].reverse();
    const longer = a.length > b.length ? reverseA : reverseB;
    const shorter = a.length > b.length ? reverseB : reverseA;

    longer.reduce((carry, cur, idx, arr) => {
        const sum = parseInt(cur) + parseInt(shorter[idx] || 0) + carry;

        if (sum >= 2) {
            arr[idx] = sum > 2 ? 1 : 0;
            if (idx === arr.length - 1) {
                arr.push(1);
            }
            return 1;
        } else {
            arr[idx] = sum === 1 ? 1 : 0;
            return 0;
        }
    }, 0);

    return longer.reverse().join("");
};
```

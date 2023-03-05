Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

```
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
Since 2 has only one digit, return it.
```

Example 2:

```
Input: num = 0
Output: 0
```

Constraints:

-   `0 <= num <= 231 - 1`

Follow up: Could you do it without any loop/recursion in O(1) runtime?

---

```js
var addDigits = function (num) {
    let reduce = 0;
    let n = num;

    while (true) {
        while (n > 0) {
            reduce += n % 10;
            n = Math.floor(n / 10);
        }
        if (reduce < 10) break;
        n = reduce;
        reduce = 0;
    }

    return reduce;
};
```

---

```js
var addDigits = function (num) {
    if (num === 0) return 0;

    let oneDigitByModNine = num % 9;
    return oneDigitByModNine === 0 ? 9 : oneDigitByModNine;
};
```

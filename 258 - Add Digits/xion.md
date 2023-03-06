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
    while (true) {
        num = [...num.toString()].reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
        console.log(num);
        if (num < 10) return num;
    }
};
```

---

```js
var addDigits = function (num) {
    if (num === 0) return 0;
    else return num % 9 === 0 ? 9 : num % 9;
};
```

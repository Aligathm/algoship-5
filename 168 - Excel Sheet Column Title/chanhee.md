Given an integer `columnNumber`, return _its corresponding column title as it appears in an Excel sheet._

For example:

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

<br>

### Example 1:

```
Input: columnNumber = 1
Output: "A"
```

### Example 2:

```
Input: columnNumber = 28
Output: "AB"
```

### Example 3:

```
Input: columnNumber = 701
Output: "ZY"
```

<br>

**Constraints:**

-   `1 <= columnNumber <= 231 - 1`

<br>
<br>
<br>

---

# Unintuitive 26-radix Solution

```js
var convertToTitle = function (columnNumber) {
    const TWENTY_SIX_NUMBER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const RADIX = 26;
    let result = "";

    while (columnNumber > 0) {
        columnNumber--;
        result += TWENTY_SIX_NUMBER[columnNumber % RADIX];
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result.split("").reverse().join("");
};
```

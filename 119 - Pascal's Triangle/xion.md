Given an integer `rowIndex`, return the `rowIndex^th` **(0-indexed)** row of the **Pascal's triangle.**

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

Example 1:

```
Input: rowIndex = 3
Output: [1,3,3,1]
```

Example 2:

```
Input: rowIndex = 0
Output: [1]
```

Example 3:

```
Input: rowIndex = 1
Output: [1,1]
```

Constraints:

-   `0 <= rowIndex <= 33`

---

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let pascalArray = [];
    for (let i = 0; i <= rowIndex; i++) {
        pascalArray[i] = [1];
        for (let j = 1; j < i; j++) {
            pascalArray[i][j] = pascalArray[i - 1][j - 1] + pascalArray[i - 1][j];
        }
        if (i != 0) pascalArray[i].push(1);
    }

    return pascalArray[rowIndex];
};
```

Given an integer `numRows`, return the first numRows of Pascal's triangle.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:
<br>
<br>

### Example 1:

```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

### Example 2:

```
Input: numRows = 1
Output: [[1]]
```

<br>
<br>

### Constraints:

-   `1 <= numRows <= 30`

<br>
<br>

---

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let pascalArray = [];
    for (let i = 0; i < numRows; i++) {
        pascalArray[i] = [1];
        for (let j = 1; j < i; j++) {
            pascalArray[i][j] = pascalArray[i - 1][j - 1] + pascalArray[i - 1][j];
        }
        if (i != 0) pascalArray[i].push(1);
    }
    return pascalArray;
};
```

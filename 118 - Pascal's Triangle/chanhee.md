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
    if (numRows === 1) return [[1]];
    else if (numRows === 2) return [[1], [1, 1]];

    // numRows만큼의 배열을 준비한다.
    // numRows안의 요소 배열들은 i번째 인덱스(1 ~ numRows)만큼을 length로 가지며
    // 전부 1로 초기화 시킨다.
    const result = [];
    for (let i = 1; i <= numRows; i++) {
        result.push(Array(i).fill(1));
    }

    // result의 3번째 요소 배열부터 ([[1], [1, 1], [1, 1, 1]])
    // for문 돌린다.
    for (let i = 2; i < result.length; i++) {
        for (let j = 1; j <= result[i].length - 2; j++) {
            // 두번째 for문에서 두번째 원소부터 마지막 원소 - 1을 돌린다.
            // 현재 요소 배열의 j번째 아이템은
            // 이전 배열의 j - 1번째 + j번째이다.
            const childArray = result[i];
            const previousChildArray = result[i - 1];
            childArray[j] = previousChildArray[j - 1] + previousChildArray[j];
        }
    }

    return result;
};
```

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

Example 2:

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

Example 3:

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

Constraints:

-   `-2^31 <= x <= 2^31 - 1`

---

# Length Check Solution

```js
/**
 * @format
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    if (x < 0) return false;
    else if (x === 0) return true;

    // x값을 문자열로 변환한 뒤 문자열의 중간 인덱스를 기준으로 앞뒤를 비교한다.
    // 앞뒤가 같으면 true, 다르면 false를 반환한다.
    // x값이 음수일 경우 false를 반환한다.
    // x값이 0일 경우 true를 반환한다.
    const str = x.toString();
    const length = str.length;
    const midIndex = Math.floor(length / 2);

    for (let i = 0; i < midIndex; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
};
```

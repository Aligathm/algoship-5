Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

Example 1:

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

Constraints:

-   `1 <= strs.length <= 200`
-   `0 <= strs[i].length <= 200`
-   `strs[i] consists of only lowercase English letters.`

---

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) {
        return strs.pop();
    }

    const shortString = strs.reduce((a, b) => (a.length <= b.length ? a : b));
    let prefix = "";

    for (let i = 0; i < shortString.length; i++) {
        const letterToCompare = shortString[i];

        const areEqual = strs.every((str) => {
            return str[i] === letterToCompare;
        });

        if (areEqual) prefix += letterToCompare;
        else break;
    }

    return prefix;
};
```

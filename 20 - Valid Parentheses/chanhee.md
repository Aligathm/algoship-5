Given a string `s` containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.

Open brackets must be closed in the correct order.

Every close bracket has a corresponding open bracket of the same type.

Example 1:

```
Input: s = "()"
Output: true
```

Example 2:

```
Input: s = "()[]{}"
Output: true
```

Example 3:

```
Input: s = "(]"
Output: false
```

Constraints:

-   `1 <= s.length <= 10^4`
-   `s consists of parentheses only '()[]{}'`.

---

# Stack

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const PARENTHESES_TABLE = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        if (isOpenParenthese(s[i])) {
            stack.push(s[i]);
        } else {
            if (!hasItem(stack) || !matchOpenAndCloseBrackets(stack, s[i], PARENTHESES_TABLE)) {
                return false;
            }
        }
    }

    return !hasItem(stack);
};

function isOpenParenthese(str) {
    return str === "(" || str === "{" || str === "[";
}

function hasItem(array) {
    return !!array.length;
}

function matchOpenAndCloseBrackets(stack, str, table) {
    return table[stack.pop()] === str;
}
```

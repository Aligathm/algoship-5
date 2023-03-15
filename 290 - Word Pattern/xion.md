Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`.

Example 1:

```
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
```

Example 2:

```
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

Example 3:

```
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```

Constraints:

-   `1 <= pattern.length <= 300`
-   `pattern` contains only lower-case English letters.
-   `1 <= s.length <= 3000`
-   `s` contains only lowercase English letters and spaces `' '`.
-   `s` does not contain any leading or trailing spaces.
-   All the words in `s` are separated by a single space.

---

# Hash table

```js
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ')
    if(pattern.length !== words.length) return false

    let match = new Map()
    let matchSet = new Set()

    for(let i=0; i<words.length; i++) {
        if(match.has(pattern[i])) {
            if(match.get(pattern[i]) !== words[i]) return false
        }else {
            if(matchSet.has(words[i])) return false
            match.set(pattern[i], words[i])
            matchSet.add(words[i])
        }
    }

    return true
};
```

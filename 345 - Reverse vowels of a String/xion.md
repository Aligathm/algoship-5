Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.

Example 1:

```
Input: s = "hello"
Output: "holle"
```

Example 2:

```
Input: s = "leetcode"
Output: "leotcede"
```

Constraints:

-   `1 <= s.length <= 3 \* 10^5`
-   `s` consist of printable ASCII characters.

---

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('')
    const vowels = new Set("aeiouAEIOU")
    let left = 0
    let right = s.length - 1
    while(left <= right) {
        const leftVowel = vowels.has(s[left])
        const rightVowel = vowels.has(s[right])
        if(!leftVowel) {
            left++
        }else if(!rightVowel) {
            right-- 
        }else {
            const temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left++
            right--
        }
    }
    return s.join('')
};
```

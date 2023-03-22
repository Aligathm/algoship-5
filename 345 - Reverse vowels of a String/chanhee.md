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
var reverseVowels = function (s) {
    s = s.split("");
    let left = 0;
    let right = s.length - 1;
    let leftVowel = false;
    let rightVowel = false;

    while (left < right) {
        for (let i = left; i < right; i++) {
            const str = s[i];

            if (str.match(/[aAeEiIoOuU]/)) {
                left = i;
                leftVowel = true;
                break;
            }
        }

        for (let i = right; i > left; i--) {
            const str = s[i];

            if (str.match(/[aAeEiIoOuU]/)) {
                right = i;
                rightVowel = true;
                break;
            }
        }

        if (leftVowel && rightVowel) {
            const temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            leftVowel = false;
            rightVowel = false;
        }

        left++;
        right--;
    }

    return s.join("");
};
```

```js
var reverseVowels = function (s) {
    s = s.split("");
    let left = 0;
    let right = s.length - 1;
    const set = new Set("aeiouAEIOU");

    while (left < right) {
        if (!set.has(s[left])) left++;
        else if (!set.has(s[right])) right--;
        else {
            const temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
        }
    }

    return s.join("");
};
```

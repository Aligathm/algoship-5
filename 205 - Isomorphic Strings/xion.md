Given two strings `s` and `t`, _determine if they are isomorphic._

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

```
Input: s = "egg", t = "add"
Output: true
```

Example 2:

```
Input: s = "foo", t = "bar"
Output: false
```

Example 3:

```
Input: s = "paper", t = "title"
Output: true
```

Constraints:

-   `1 <= s.length <= 5 * 104`
-   `t.length == s.length`
-   `s` and `t` consist of any valid ascii character.

---

# Hashtable

```js
var isIsomorphic = function (s, t) {
    let sKeyTable = new Map();
    let tKeyTable = new Map();

    for (let i = 0; i < s.length; i++) {
        if (sKeyTable.has(s[i]) && sKeyTable.get(s[i]) !== t[i]) return false;
        else sKeyTable.set(s[i], t[i]);
        if (tKeyTable.has(t[i]) && tKeyTable.get(t[i]) !== s[i]) return false;
        else tKeyTable.set(t[i], s[i]);
    }

    return true;
};
```

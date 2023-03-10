You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example 1:

```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

Example 2:

```
Input: n = 1, bad = 1
Output: 1
```

Constraints:

-   `1 <= bad <= n <= 231 - 1`

---

# binary search

Time complexity - O(log n)

Interactive 형 문제는 처음 풀어본다.

```js
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    // 문제의 특성상, false와 true가 혼잡하게 섞이지 않으므로,
    // 정렬이 되었다고 볼 수 있다.
    // 또한, 설명의 마지막에 API 콜을 최소화 하라고 했기 때문에 바이너리 서치를 사용한다.
    return function (n) {
        let left = 1;
        let right = n;
        let mid;

        while (left < right) {
            mid = Math.floor((left + right) / 2);

            const isBad = isBadVersion(mid);

            if (!isBad) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    };
};
```

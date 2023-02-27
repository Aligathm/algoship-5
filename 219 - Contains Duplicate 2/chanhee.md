Given an integer array `nums` and an integer `k`, return `true` _if there are two distinct_ indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

Example 1:

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

Example 2:

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

Example 3:

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

Constraints:

-   `1 <= nums.length <= 105`
-   `-109 <= nums[i] <= 109`
-   `0 <= k <= 105`

---

# Sliding Window

```js
var containsNearbyDuplicate = function (nums, k) {
    if (k === 0) return false;
    if (nums.length === 1) return false;

    const table = new Set();

    for (let i = 0; i < nums.length; i++) {
        // 윈도우의 범위가 넘어서면 윈도우 이전의 값을 삭제함
        // abs(i - j) <= k
        if (i > k) {
            table.delete(nums[i - k - 1]);
        }
        if (table.has(nums[i])) return true;
        table.add(nums[i]);
    }

    return false;
};
```

---

# Hash Table

```js
var containsNearbyDuplicate = function (nums, k) {
    if (k === 0) return false;
    if (nums.length === 1) return false;

    const table = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (table.has(nums[i]) && i - table.get(nums[i]) <= k) return true;
        table.set(nums[i], i);
    }

    return false;
};
```

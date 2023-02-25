Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

Example 1:

```
Input: nums = [1,2,3,1]
Output: true
```

Example 2:

```
Input: nums = [1,2,3,4]
Output: false
```

Example 3:

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

Constraints:

-   `1 <= nums.length <= 105`
-   `-109 <= nums[i] <= 109`

---

```js
var containsDuplicate = function (nums) {
    const table = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (table.has(nums[i])) return true;
        else table.add(nums[i]);
    }

    return false;
};
```

```js
var containsDuplicate = function (nums) {
    if (nums.length === 1) return false;
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = 1;

    while (right <= nums.length) {
        if (nums[left] === nums[right]) return true;
        else {
            left = right;
            right++;
        }
    }

    return false;
};
```

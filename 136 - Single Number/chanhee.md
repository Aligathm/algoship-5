Given a **non-empty** array of integers `nums`, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

```
Input: nums = [2,2,1]
Output: 1
```

Example 2:

```
Input: nums = [4,1,2,1,2]
Output: 4
```

Example 3:

```
Input: nums = [1]
Output: 1
```

Constraints:

-   `1 <= nums.length <= 3 * 104`
-   `-3 * 104 <= nums[i] <= 3 * 104`
-   Each element in the array appears twice except for one element which appears only once.

---

# Bit Manipulation

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;
};
```

# hashtable

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const table = {};

    for (let i = 0; i < nums.length; i++) {
        if (!table[nums[i]]) table[nums[i]] = 1;
        else table[nums[i]] += 1;
    }

    for (const key in table) {
        if (table[key] === 1) return key;
    }
};
```

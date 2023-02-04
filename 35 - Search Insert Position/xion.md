Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

Example 1:

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

Example 2:

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

Example 3:

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

Constraints:

-   `1 <= nums.length <= 104`
-   `-104 <= nums[i] <= 104`
-   `nums` contains **distinct** values sorted in **ascending** order.
-   `-104 <= target <= 104`

---

# Binary Search

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length === 1) return nums[0] < target ? 1 : 0;

    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (startIndex <= endIndex) {
        const halfIndex = Math.floor((startIndex + endIndex) / 2);
        if (nums[halfIndex] === target) {
            return halfIndex;
        } else if (nums[halfIndex] < target) {
            startIndex = halfIndex + 1;
        } else {
            endIndex = halfIndex - 1;
        }
    }

    return nums[startIndex] > target ? startIndex : startIndex + 1;
};
```

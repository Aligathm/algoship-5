Given an array `nums` of size `n`, return _the majority element_.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

Example 1:

```
Input: nums = [3,2,3]
Output: 3
```

Example 2:

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

Constraints:

-   `n == nums.length`
-   `1 <= n <= 5 \* 104`
-   `-109 <= nums[i] <= 109`

Follow-up: Could you solve the problem in linear time and in O(1) space?

---

# Two Pointer

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let left = 0,
        right = 1;
    let count = 1;
    const length = nums.length;
    nums.sort((a, b) => a - b);

    if (length === 1) return nums[left];

    while (left < length && right < length && left < right) {
        if (nums[left] === nums[right]) {
            count++;
            right++;
            if (count >= Math.round(length / 2)) return nums[left];
        } else {
            left = right;
            right = left + 1;
            count = 1;
        }
    }

    return nums[left];
};
```

---

# Boyer Moore Vote

```js
var majorityElement = function (nums) {
    let count = 0;
    let majorNumber = 0;

    for (let num of nums) {
        if (count == 0) {
            majorNumber = num;
        }
        if (num === majorNumber) count++;
        else count--;
    }

    return majorNumber;
};
```

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

Example 2:

```
Input: nums = [0]
Output: [0]
```

Constraints:

-   `1 <= nums.length <= 104`
-   `-2^31 <= nums[i] <= 2^31 - 1`

Follow up: Could you minimize the total number of operations done?

---

# Two pointers

```js
var moveZeroes = function (nums) {
    let idx = 0;
    let zero = 0;
    while (idx < nums.length) {
        while (nums[zero] !== 0 && zero < nums.length) {
            zero++;
        }
        if (idx > zero && nums[idx] !== 0) {
            nums[zero] = nums[idx];
            nums[idx] = 0;
        }
        idx++;
    }
};
```

---

```js
var moveZeroes = function (nums) {
    let zero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[i];
            nums[i] = nums[zero];
            nums[zero] = temp;
            zero++;
        }
    }
};
```

You are given a **sorted unique** integer array `nums`.

A range `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return the **smallest sorted** list of ranges that **cover all the numbers in the array exactly**. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

-   `"a->b"` if `a != b`
-   `"a"` if `a == b`

Example 1:

```
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

Example 2:

```
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```

Constraints:

-   `0 <= nums.length <= 20`
-   `-231 <= nums[i] <= 231 - 1`
-   All the values of `nums` are unique.
-   `nums` is sorted in ascending order.

---

# Dirty code

```js
var summaryRanges = function (nums) {
    if (nums.length === 0) return [];
    else if (nums.length === 1) return [`${nums[0]}`];

    const sortedRanges = [];
    let range = [];

    range.push(nums[0]);

    nums.forEach((num, idx, arr) => {
        if (idx > 0) {
            if (num - 1 === arr[idx - 1]) {
                range.push(num);
                if (idx === arr.length - 1) {
                    sortedRanges.push(range);
                }
            } else {
                sortedRanges.push(range);
                range = [];
                range.push(num);

                if (idx === arr.length - 1) {
                    sortedRanges.push(range);
                }
            }
        }
    });

    const result = sortedRanges.map((r) => {
        if (r.length === 1) return `${r}`;
        else {
            return `${r[0]}->${r[r.length - 1]}`;
        }
    });

    return result;
};
```

---

```js
var summaryRanges = function (nums) {
    const result = [];
    let idx = 0;

    while (idx < nums.length) {
        let first = idx;

        // 현재값과 다음값 비교를 위해 idx + 1 < nums.length 조건 넣음
        while (idx + 1 < nums.length && nums[idx] + 1 === nums[idx + 1]) idx++;

        if (first === idx) result.push(`${nums[first]}`);
        else result.push(`${nums[first]}->${nums[idx]}`);

        idx++;
    }

    return result;
};
```

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

Constraints:

-   `2 <= nums.length <= 104`
-   `-109 <= nums[i] <= 109`
-   `-109 <= target <= 109`
-   Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

---

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 일단 배열 0번째 인덱스랑 다른 인덱스 전체랑 하나씩 더해서 target값인지 확인
    // 맞음? 나오면 인덱스값 저장 함 answer 리턴
    // 아니면 다음 인덱스랑 나머지 값들 하나씩 또 다시 더해봄
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i == j) break;
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [];
};
```

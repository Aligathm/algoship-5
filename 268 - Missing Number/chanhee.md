Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, _return the only number in the range that is missing from the array._

Example 1:

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

Example 2:

```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

Example 3:

```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

Constraints:

-   `n == nums.length`
-   `1 <= n <= 104`
-   `0 <= nums[i] <= n`
-   All the numbers of nums are unique.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

---

# Sorting

```js
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);
    if (nums[0] !== 0) return 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 !== nums[i + 1]) return nums[i] + 1;
    }

    return nums.length;
};
```

---

# Bit Manipulation

```js
var missingNumber = function (nums) {
    let bit = nums.length;
    for (let i = 0; i < nums.length; i++) {
        bit ^= i ^ nums[i];
    }

    return bit;
};
```

---

# Binary Search

```js
var missingNumber = function (nums) {
    // nums가 미리 정렬된 형태로 넘어온다면 이진탐색이 가장 빠르다.
    nums.sort((a, b) => a - b);

    let left = 0;
    // 찾아야 되는 수가 0 ~ n까지라서 right는 nums.length가 된다.
    let right = nums.length;
    let mid = 0;

    while (left < right) {
        mid = Math.floor((left + right) / 2);

        // missing number가 왼쪽에 있다는 것, case: [1, 2, 3]
        if (mid < nums[mid]) right = mid;
        // mid가 nums[mid]가 같거나 작다는건 missing number가 오른쪽에 있다는 것
        // case: [0, 1, 2]
        else left = mid + 1;
    }

    return left;
};
```

---

# Hash Table

```js
var missingNumber = function (nums) {
    // 0 ~ n - 1 까지를 저장하는 테이블
    const indexTable = new Set();
    // nums의 원소를 저장하는 테이블
    const numTable = new Set();

    for (let i = 0; i < nums.length; i++) {
        indexTable.add(i);
        numTable.add(nums[i]);
    }

    for (num of numTable) {
        if (indexTable.has(num)) indexTable.delete(num);
    }

    if (!indexTable.size) return nums.length;
    // 인덱스 테이블에 남은 원소는 하나이다.
    for (num of indexTable) return num;
};
```

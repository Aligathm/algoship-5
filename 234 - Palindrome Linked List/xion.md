Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.

Example 1:

```
Input: head = [1,2,2,1]
Output: true
```

Example 2:

```
Input: head = [1,2]
Output: false
```

Constraints:

-   The number of nodes in the list is in the range `[1, 10^5]`.
-   `0 <= Node.val <= 9`

Follow up: Could you do it in O(n) time and O(1) space?

---

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const list = [];
    while (head !== null) {
        list.push(head.val);
        head = head.next;
    }

    for (let i = 0; i <= (list.length - 1) / 2; i++) {
        if (list[i] !== list[list.length - 1 - i]) return false;
    }

    return true;
};
```

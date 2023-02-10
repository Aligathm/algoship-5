Given the `head` of a sorted linked list, _delete all duplicates such that each element appears only once._ Return _the linked list **sorted** as well._

Example 1:

```
Input: head = [1,1,2]
Output: [1,2]
```

Example 2:

```
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

Constraints:

-   The number of nodes in the list is in the range `[0, 300]`.
-   `-100 <= Node.val <= 100`
-   The list is guaranteed to be sorted in ascending order.

---

# Tricky way

```js
var deleteDuplicates = function (head) {
    if (!head) return head;

    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    arr = [...new Set(arr)];

    arr = arr.map((v) => new ListNode(v));

    arr.forEach((v, idx) => {
        if (idx !== arr.length - 1) {
            v.next = arr[idx + 1];
        }
    });

    return arr[0];
};
```

---

# General

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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;

    let headToReturn = head;

    let slower = head;
    let faster = head.next;

    while (slower && faster) {
        while (faster && slower.val === faster.val) {
            slower.next = faster.next;
            faster = faster.next;
        }

        if (!faster) return headToReturn;
        slower = faster;
        faster = faster.next;
    }

    return headToReturn;
};
```

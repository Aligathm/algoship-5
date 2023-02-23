Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return _the new head_.

Example 1:

```
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
```

Example 2:

```
Input: head = [], val = 1
Output: []
```

Example 3:

```
Input: head = [7,7,7,7], val = 7
Output: []
```

Constraints:

-   The number of nodes in the list is in the range `[0, 104].`
-   `1 <= Node.val <= 50`
-   `0 <= val <= 50`

---

```js
var removeElements = function (head, val) {
    if (!head) return null;

    // next의 val을 살펴보는 것이기 때문에 current는 newHead임
    const newHead = new ListNode();
    newHead.next = head;
    let current = newHead;

    while (current.next != null) {
        if (current.next.val === val) current.next = current.next.next;
        else {
            current = current.next;
        }
    }

    return newHead.next;
};
```

---

```js
var removeElements = function (head, val) {
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let newListNode = new ListNode();
    let pointer = newListNode;
    pointer.next = head;

    while (pointer.next !== null) {
        if (pointer.next.val === val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }

    return newListNode.next;
};
```

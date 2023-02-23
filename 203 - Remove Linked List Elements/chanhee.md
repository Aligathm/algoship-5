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
    let newHead = new ListNode();
    let newHeadPointer = newHead;
    while (head) {
        if (head.val !== val) {
            newHead.next = new ListNode(head.val);
            newHead = newHead.next;
        }
        head = head.next;
    }

    return newHeadPointer.next;
};
```

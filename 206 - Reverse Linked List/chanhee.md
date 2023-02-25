Given the `head` of a singly linked list, reverse the list, and return _the reversed list._

Example 1:

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

Example 2:

```
Input: head = [1,2]
Output: [2,1]
```

Example 3:

```
Input: head = []
Output: []
```

Constraints:

-   The number of nodes in the list is the range `[0, 5000].`
-   `-5000 <= Node.val <= 5000`

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

---

```js
var reverseList = function (head) {
    let prev = null;
    let curr = head; //{1}

    while (curr) {
        const temp = curr.next;
        curr.next = prev;

        prev = curr;
        curr = temp;
    }

    return prev;
};
```

---

```js
var reverseList = function (head) {
    const arr = [];

    while (head) {
        arr.push(head);
        head = head.next;
    }

    arr.reverse();

    let newHead = new ListNode();
    let dummy = newHead;

    arr.forEach((h) => {
        newHead.next = new ListNode(h.val);
        newHead = newHead.next;
    });

    return dummy.next;
};
```

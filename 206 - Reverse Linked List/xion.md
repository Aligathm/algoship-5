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
    let reversedArray = [];
    let reversedList = new ListNode();
    const p = reversedList;
    while (head !== null) {
        reversedArray.unshift(head.val);
        head = head.next;
    }

    reversedArray.forEach((v) => {
        reversedList.next = new ListNode(v, null);
        reversedList = reversedList.next;
    });

    return p.next;
};
```

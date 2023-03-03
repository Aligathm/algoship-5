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

**체감상 Easy 문제가 아니다.**

# javascriptistic way

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

    while (head) {
        list.push(head.val);
        head = head.next;
    }

    return list.join("") === list.reverse().join("");
};
```

# maybe standard way

```js
var isPalindrome = function (head) {
    // 1. 중간 지점 찾기
    // 2. 그 지점부터 끝까지 next를 뒤집기
    // 3. 그후, head 포인터와 맨끝 포인터를 비교

    const mid = getMiddleOfList(head);
    // edge case: the number of nodes is 1.
    if (!mid) return true;

    const end = reverseHalfListStartAt(mid);
    return compare(head, end);
};

function getMiddleOfList(head) {
    let dummy = head;
    let slow = dummy;
    let fast = dummy;

    while (fast) {
        slow = slow?.next;
        fast = fast?.next?.next;
    }

    return slow;
}

// 가운데를 지나친 후의 포인터가 인풋임
// ex - [1, 2, 3, 2, 1] -> 3이후의 2의 포인터가 인풋으로 들어옴
function reverseHalfListStartAt(mid) {
    const dummyHead = new ListNode();
    let dummy = mid;
    let prev = dummyHead;
    let temp;

    while (dummy) {
        temp = dummy?.next;

        dummy.next = prev;
        prev = dummy;
        dummy = temp;
    }

    return prev;
}

function compare(head, end) {
    // end가 reverseHalfListStartAt의 dummyHead까지 이동하면 종료
    while (end.next) {
        if (head.val !== end.val) {
            return false;
        }
        head = head.next;
        end = end.next;
    }

    return true;
}
```

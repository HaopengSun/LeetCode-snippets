// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const hasCycle = head => {
  if (!head.val || !head.next) { return false; }
  let slow = head.val, fast = head.next;
  while (fast.val && fast.next && slow.val !== fast.val) {
      slow.val = slow.next;
      fast.val = fast.next.next;
  }
  return slow.val === fast.val;
};

const head = [3,2,0,-4]
const a = new ListNode(3)
a.next = 2
const b = new ListNode(2)
b.next = 0
const c = new ListNode(0)
c.next = -4
const d = new ListNode(-4)
d.next = 2

console.log(hasCycle(a))
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const head = new ListNode()
const node1 = new ListNode(2)
const node2 = new ListNode(4)
const node3 = new ListNode(3)
head.next = node1
node1.next = node2
node2.next = node3

const head1 = new ListNode()
const node11 = new ListNode(5)
const node12 = new ListNode(6)
const node13 = new ListNode(4)
head1.next = node11
node11.next = node12
node12.next = node13

const loopThrough = head => {
  const next = node => {
    console.log(node.val)
    if (node.next !== null) next(node.next)
  }
  next(head)
}

// reverse a linked list
// 0 -> 1 -> 2 -> 3 -> 4
// prev = null current = 0 next = null: 0 -> null
// prev = 0 current = 1 next = 2: 2 -> 1 -> null
const reverseLinkedList = head => {
  let prev = null
  current = head
  let next = null
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  loopThrough(node)
}

// add two linked lists
const addTwoNum = (head, head1) => {
  const addictionHead = new ListNode()
  let current = addictionHead
  const next = (node, node1) => {
    let newNode
    if (node.val + node1.val >= 10){
      current.val += 1
      newNode = new ListNode(node.val + node1.val - 10)
    } else {
      newNode = new ListNode(node.val + node1.val)
    }
    current.next = newNode
    current = newNode
    if (node.next !== null && node1.next !== null) {
      next(node.next, node1.next)
    }
  }
  next(head.next, head1.next)
  reverseLinkedList(addictionHead)
}

addTwoNum(head, head1)
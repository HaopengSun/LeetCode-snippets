// 1 -> 2 -> 3 -> 4
// 4 -> 3 -> 2 -> 1

class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head
  }

  size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
  }

  clear() {
      this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
  }

  getFirst() {
    return this.head;
  }
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4

let list = new LinkedList(node1)

console.log(list.size())
console.log(list.getLast())
console.log(list.getFirst())

// 1 -> 2 -> 3 -> 4 -> null
// 4 -> 3 -> 2 -> 1 -> null
const reversedLinkedList = function (head){
  let current = head;
  let previous = null;
  let tem
  
  while (current){
    tem = current.next // 2
    current.next = previous // null
    previous = current
    current = tem // 2
  }
}

const reversedList = reversedLinkedList(list)

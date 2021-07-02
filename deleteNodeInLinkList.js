function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]

const num1 = new ListNode(4)
const num2 = new ListNode(5)
const num3 = new ListNode(1)
const num4 = new ListNode(9)
num1.next = num2
num2.next = num3
num3.next = num4
const node = 1

const deleteNodeInLinkList = (head, node) => {
  const next = head => {
    if (head.next) {
      console.log(head.next.val, node)
      if (head.next.val === node) {  
        head.next = head.next.next
      } else {
      next(head.next)
      }
    } 
  }
  next(head)
}

deleteNodeInLinkList(num1, node)

const print = head => {
  const next = head => {
    console.log(head.val)
    if (head.next){
      if (head.next.val) next(head.next)
    }
  }
  next(head)
}

print(num1)
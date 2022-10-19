const { ListNode, MyLinkedList } = require("./*707设计链表")

const getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return
  let curA = headA,
    curB = headB
  let lenA = (lenB = 1)
  while (curA.next) {
    lenA++
    curA = curA.next
  }
  while (curB.next) {
    lenB++
    curB = curB.next
  }
  curA = headA
  curB = headB
  if (lenB > lenA) {
    let temp = curA,
      templen = lenA
    curA = curB
    curB = temp
    lenA = lenB
    lenB = templen
  }
  while (lenA - lenB) {
    curA = curA.next
    lenA--
  }
  while (curA) {
    if (curA === curB) return curA
    curA = curA.next
    curB = curB.next
  }
  return
}

const list1 = new MyLinkedList()
const list2 = new MyLinkedList()
const list3 = new MyLinkedList()

list1.createLinkedList([4, 1])
list2.createLinkedList([5, 0, 1])
list3.createLinkedList([8, 4, 5])
list1.tail.next = list3.head
list2.tail.next = list3.head

console.log(getIntersectionNode(list1.head, list2.head))

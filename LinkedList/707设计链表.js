class ListNode {
  constructor(val, next) {
    this.val = val ?? null
    this.next = next ?? null
  }
}
class MyLinkedList {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }
  createLinkedList(arr) {
    if (arr.length === 0) return
    else {
      for (let i = 0; i < arr.length; i++) {
        this.addAtTail(arr[i])
      }
    }
  }
  getNode(index) {
    if (index < 0 || index >= this.size) return null
    else {
      let node = new ListNode(null, this.head)
      while (index-- >= 0) {
        node = node.next
      }
      return node
    }
  }
  get(index) {
    if (index < 0 || index >= this.size) return -1
    return this.getNode(index).val
  }
  addAtHead(val) {
    let node = new ListNode(val, this.head)
    this.head = node
    this.size++
    if (!this.tail) this.tail = node
  }
  addAtTail(val) {
    let node = new ListNode(val, null)
    this.size++
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }
  addAtIndex(index, val) {
    if (index > this.size) {
      return
    } else if (index <= 0) {
      this.addAtHead(val)
      return
    } else if (index === this.size) {
      this.addAtTail(val)
      return
    } else {
      let node = this.getNode(index - 1)
      node.next = new ListNode(val, node.next)
      this.size++
    }
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return
    } else if (index === 0) {
      this.head = this.head.next
      if (this.size === 1) this.tail = this.head
      this.size--
      return
    } else {
      let node = this.getNode(index - 1)
      node.next = node.next.next
      if (index === this.size - 1) {
        this.tail = node
      }
      this.size--
    }
  }
  printListNode() {
    const res = new Array()
    let node = this.head
    while (node) {
      res.push(node.val)
      node = node.next
    }
    console.log(res)
  }
}

module.exports = {
  ListNode,
  MyLinkedList,
}

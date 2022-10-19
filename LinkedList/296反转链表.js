const { ListNode, MyLinkedList } = require("./*707设计链表.js")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const reverseList = function (head) {
  if (!head || !head.next) return head
  let cur = head
  let pre = (post = null)
  while (cur) {
    post = cur.next
    cur.next = pre
    pre = cur
    cur = post
  }
  return pre
}

rl.on("line", function (line) {
  const list = new MyLinkedList()
  list.createLinkedList(line.split(" "))
  list.head = reverseList(list.head)
  list.printListNode()
})
rl.on("close", function () {
  process.exit(0)
})

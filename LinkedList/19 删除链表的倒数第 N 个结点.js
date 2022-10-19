const { ListNode, MyLinkedList } = require("./*707设计链表")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const removeNthFromEnd = function (head, n) {
  let node = (slow = fast = new ListNode(null, head))
  while (n--) fast = fast.next
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return node.next
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    const list = new MyLinkedList()
    list.createLinkedList(lines[0].split(" "))
    list.head = removeNthFromEnd(list.head, lines[1])
    list.printListNode()
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

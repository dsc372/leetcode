const { ListNode, MyLinkedList } = require("./*707设计链表.js")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const removeElements = function (head, val) {
  let node = new ListNode(null, head)
  let cur = node
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return node.next
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    const list = new MyLinkedList()
    list.createLinkedList(lines[0].split(" "))
    list.head = removeElements(list.head, lines[1])
    list.printListNode()
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

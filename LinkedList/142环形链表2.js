const { ListNode, MyLinkedList } = require("./*707设计链表")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const detectCycle = function (head) {
  let slow = (fast = head)
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      let node1 = head,
        node2 = fast
      while (node1 !== node2) {
        node1 = node1.next
        node2 = node2.next
      }
      return node1
    }
  }
  return null
}

rl.on('line',function(line){
  const list = new MyLinkedList()
  list.createLinkedList(line.split(' ').map(Number))
  list.tail.next = list.head.next
  console.log(detectCycle(list.head))
  rl.close()
})
rl.on('close',function(){
  process.exit()
})



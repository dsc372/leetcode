const { ListNode, MyLinkedList } = require("./*707设计链表")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const detectCycle = function (head) {
  let fast=head,slow=head
  while(fast&&fast.next){
      slow=slow.next
      fast=fast.next.next
      if(fast===slow){
          while(head!==fast){
              head=head.next
              fast=fast.next
          }
          return head
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



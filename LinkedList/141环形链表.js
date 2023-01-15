const { ListNode, MyLinkedList } = require("./*707设计链表")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const hasCycle = function(head) {
  let fast=head,slow=head
  while(fast&&fast.next){
      fast=fast.next.next
      slow=slow.next
      if(slow===fast)return true
  }
  return false
}

rl.on('line',function(line){
  const list = new MyLinkedList()
  list.createLinkedList(line.split(' ').map(Number))
  list.tail.next = list.head.next
  console.log(hasCycle(list.head))
  rl.close()
})
rl.on('close',function(){
  process.exit()
})



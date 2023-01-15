const { ListNode, MyLinkedList } = require("./*707设计链表")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const swapPairs = function(head) {
  const dummyHead=new ListNode()
  dummyHead.next=head
  let cur=dummyHead
  while(cur.next&&cur.next.next){
      let tmp=cur.next
      let tmp1=cur.next.next.next
      cur.next=cur.next.next
      cur.next.next=tmp
      cur.next.next.next=tmp1
      cur=cur.next.next
  }
  return dummyHead.next
}

rl.on('line',function(line){
  const list = new MyLinkedList()
  list.createLinkedList(line.split(' ').map(Number))
  console.log(swapPairs(list.head))
  rl.close()
})
rl.on('close',function(){
  process.exit()
})



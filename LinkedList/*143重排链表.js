const { ListNode, MyLinkedList } = require("./*707设计链表")
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
const reorderList = function(head) {
    const tmpHead=new ListNode(null,head)
    let slow=fast=tmpHead
    while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    fast=slow.next
    slow.next=null
    slow=head
    fast=reverseList(fast)
    while(fast){
      let cur=fast.next
      fast.next=slow.next
      slow.next=fast
      fast=cur
      slow=slow.next.next
    }
}

rl.on('line',function(line){
  const list = new MyLinkedList()
  list.createLinkedList(line.split(' ').map(Number))
  reorderList(list.head)
  list.printListNode()
  rl.close()
})
rl.on('close',function(){
  process.exit()
})



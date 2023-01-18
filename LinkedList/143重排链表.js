const { ListNode, MyLinkedList } = require("./*707设计链表")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const reorderList = function(head) {
  const arr=new Array()
  let cur=head
  while(cur){
      arr.push(cur.val)
      cur=cur.next
  }
  cur=head
  let left=1,right=arr.length-1
  while(left<=right){
      let tmp=new ListNode(arr[right])
      cur.next=tmp
      cur=cur.next
      right--
      if(left<=right){
          tmp=new ListNode(arr[left])
          cur.next=tmp
          cur=cur.next
          left++
      }
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



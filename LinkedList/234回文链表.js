const { ListNode, MyLinkedList } = require("./*707设计链表")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const isPalindrome = function(head) {
  let cur=head
  const arr=new Array()
  while(cur){
      arr.push(cur.val)
      cur=cur.next
  }
  let left=0,right=arr.length-1
  while(left<=right){
      if(arr[left]!==arr[right])return false
      left++
      right--
  }
  return true
}

rl.on('line',function(line){
  const list = new MyLinkedList()
  list.createLinkedList(line.split(' ').map(Number))
  console.log(isPalindrome(list.head))
  rl.close()
})
rl.on('close',function(){
  process.exit()
})



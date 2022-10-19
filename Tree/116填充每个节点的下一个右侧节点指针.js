const connect = function (root) {
  if(!root)return root
  const que = new Array()
  que.push(root)
  while (que.length > 0) {
    let size = que.length
    while (size-- > 1) {
      if(que[0].left)que.push(que[0].left)
      if(que[0].right)que.push(que[0].right)
      que[0].next = que[1]
      que.shift()
    }
    if(que[0].left)que.push(que[0].left)
    if(que[0].right)que.push(que[0].right)
    que[0].next = null
    que.shift()
  }
  return root
}

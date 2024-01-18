const connect = function (root) {
  if (!root) return null
  const que = [root]
  while (que.length) {
    let length = que.length
    while (length--) {
      if (que[0].left) que.push(que[0].left)
      if (que[0].right) que.push(que[0].right)
      que[0].next = length ? que[1] : null
      que.shift()
    }
  }
  return root
}

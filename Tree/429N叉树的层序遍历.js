const levelOrder = function (root) {
  if (root === null) return []
  const que = new Array()
  que.push(root)
  const res = new Array()
  while (que.length) {
    let size = que.length
    let arr = new Array()
    while (size--) {
      arr.push(que[0].val)
      for (i of que[0].children) {
        que.push(i)
      }
      que.shift()
    }
    res.push(arr)
  }
  return res
}

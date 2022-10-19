const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const levelOrder = function (root) {
  if (root === null) return []
  const que = new Array()
  const res = new Array()
  res.push([root.val])
  que.push(root)
  while (que.length > 0) {
    const arr = new Array()
    let size = que.length
    while (size--) {
      const treeNode = que.shift()
      if (treeNode.left !== null) {
        arr.push(treeNode.left.val)
        que.push(treeNode.left)
      }
      if (treeNode.right !== null) {
        arr.push(treeNode.right.val)
        que.push(treeNode.right)
      }
    }
    if (arr.length > 0) {
      res.push(arr)
    }
  }
  return res
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(levelOrder(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

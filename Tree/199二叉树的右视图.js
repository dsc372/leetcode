const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const rightSideView = function (root) {
  if (root === null) return []
  const que = new Array()
  const res = new Array()
  que.push(root)
  while (que.length) {
    let size = que.length
    while (size--) {
      if (que[0].left) que.push(que[0].left)
      if (que[0].right) que.push(que[0].right)
      if(size>0)
        que.shift()
      else
        res.push(que.shift().val)
    }
  }
  return res
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(rightSideView(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

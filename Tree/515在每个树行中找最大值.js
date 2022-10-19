const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const largestValues = function (root) {
  if (root === null) return []
  const que = new Array()
  const res = new Array()
  que.push(root)
  while (que.length) {
    let size = que.length
    let max = que[0].val
    for (i = 0; i < size; i++) {
      if (que[0].left) que.push(que[0].left)
      if (que[0].right) que.push(que[0].right)
      max = Math.max(que[0].val, max)
      que.shift()
    }
    res.push(max)
  }
  return res
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" ").map(Number))
  console.log(largestValues(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

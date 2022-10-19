const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const countNodes = function (root) {
  if (root === null) return 0
  const que = new Array(root)
  let res = 0
  while (que.length) {
    let size = que.length
    res += size
    while (size--) {
      if (que[0].left) que.push(que[0].left)
      if (que[0].right) que.push(que[0].right)
      que.shift()
    }
  }
  return res
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(countNodes(root))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})

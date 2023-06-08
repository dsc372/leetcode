const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const findBottomLeftValue = function (root) {
  if (root === null) return 0
  const que = new Array()
  que.push(root)
  let res = 0
  while (que.length) {
    let size = que.length
    for (let i = 0; i < size; i++) {
      if (i === 0) res = que[0].val
      if (que[0].left) que.push(que[0].left)
      if (que[0].right) que.push(que[0].right)
      que.shift()
    }
  }
  return res
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(findBottomLeftValue(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const averageOfLevels = function (root) {
  if (root === null) return []
  const que = new Array()
  const res = new Array()
  que.push(root)
  while (que.length) {
    let size = que.length
    let sum = 0
    for (i = 0; i < size; i++) {
      if (que[0].left) que.push(que[0].left)
      if (que[0].right) que.push(que[0].right)
      sum += que[0].val
      que.shift()
    }
    res.push(sum / size)
  }
  return res
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(averageOfLevels(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

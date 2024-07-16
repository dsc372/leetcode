const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const sumOfLeftLeaves = function (root) {
  if (!root) return 0
  const left = sumOfLeftLeaves(root.left),
    right = sumOfLeftLeaves(root.right)
  return root.left && !root.left.left && !root.left.right
    ? root.left.val + left + right
    : left + right
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(sumOfLeftLeaves(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const getDepth = function (root) {
  if (root === null) return 0
  let left = getDepth(root.left)
  if (left === -1) return -1
  let right = getDepth(root.right)
  if (right === -1) return -1
  return Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right)
}
const isBalanced = function (root) {
  return getDepth(root) !== -1
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(isBalanced(root))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})

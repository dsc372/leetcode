const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const inorderTraversal = function (root) {
  const res = new Array()
  traversal(root, res)
  return res
}
const traversal = function (root, arr) {
  if (root === null) return
  traversal(root.left, arr)
  arr.push(root.val)
  traversal(root.right, arr)
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(inorderTraversal(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

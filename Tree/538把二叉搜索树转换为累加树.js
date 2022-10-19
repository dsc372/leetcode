const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const traversal = function (root, sum) {
  if (root === null) return sum
  let val = traversal(root.right, sum)
  root.val += val
  return traversal(root.left, root.val)
}
const convertBST = function (root) {
  traversal(root, 0)
  return root
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" ").map(Number))
  console.log(convertBST(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

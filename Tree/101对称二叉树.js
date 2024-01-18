const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const compare = function (left, right) {
  if (left === null && right === null) return true
  else if (left === null || right === null || left.val !== right.val)
    return false
  else return compare(left.left, right.right) && compare(left.right, right.left)
}
const isSymmetric = function (root) {
  if (root === null) return true
  return compare(root.left, root.right)
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(isSymmetric(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

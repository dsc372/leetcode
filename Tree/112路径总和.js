const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const travelrsal = function (root, count) {
  if (root.left === null && root.right === null) {
    return count === 0
  }
  if (root.left) {
    if (travelrsal(root.left, count - root.left.val)) return true
  }
  if (root.right) {
    if (travelrsal(root.right, count - root.right.val)) return true
  }
  return false
}
const hasPathSum = function (root, targetSum) {
  if (root === null) return false
  return travelrsal(root, targetSum - root.val)
}

//最后一个数字为targetSum
rl.on("line", function (line) {
  const lines = line.split(" ")
  let targetSum = lines.pop()
  const root = MyTree.createTree(lines)
  console.log(hasPathSum(root, targetSum))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

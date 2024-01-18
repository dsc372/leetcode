const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const trimBST = function (root, low, high) {
  if (root === null) return null
  if (root.val < low) {
    return trimBST(root.right, low, high)
  } else if (root.val > high) {
    return trimBST(root.left, low, high)
  } else {
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
  }
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 3) {
    const root = MyTree.createTree(lines[0].split(" "))
    console.log(trimBST(root, lines[1], lines[2]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit()
})

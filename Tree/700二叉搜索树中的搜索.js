const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const searchBST = function (root, val) {
  if (root === null) return null
  else if (root.val === val) return root
  else if (root.val < val) return searchBST(root.right, val)
  else if (root.val > val) return searchBST(root.left, val)
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    const root = MyTree.createTree(lines[0].split(" "))
    console.log(searchBST(root, lines[1]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

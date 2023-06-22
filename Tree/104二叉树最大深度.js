const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const maxDepth = function (root) {
  if(root===null)return 0
    let res=1
    return res+Math.max(maxDepth(root.left),maxDepth(root.right))
}

// const maxDepth = function(root) {
//   if(root===null)return 0
//   let res=1
//   return res+Math.max(maxDepth(root.left),maxDepth(root.right))
// };

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(maxDepth(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

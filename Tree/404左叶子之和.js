const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const sumOfLeftLeaves = function(root) {
    if(root===null)return 0
    let left=sumOfLeftLeaves(root.left)
    let right=sumOfLeftLeaves(root.right)
    let mid=0
    if(root.left&&!root.left.left&&!root.left.right){
        mid=root.left.val
    }
    return left+mid+right
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(sumOfLeftLeaves(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

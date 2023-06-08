const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const minDepth = function(root) {
  if(root===null)return 0
  let minLeft=minDepth(root.left),minRight=minDepth(root.right)
  if(minLeft===0&&minRight===0){
      return 1
  }else if(minLeft===0||minRight===0){
      return 1+(minLeft===0?minRight:minLeft)
  }else{
      return 1+Math.min(minLeft,minRight)
  }
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(minDepth(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

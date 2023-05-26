const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const sumNumbers = function(root) {
  if(root===null)return 0
  return backTrack(root,0,0)
}
const backTrack=function(root,cur,res){
  cur=cur*10+root.val
  if(!root.left&&!root.right)return res+cur
  if(root.left){
      res=backTrack(root.left,cur,res)
  }
  if(root.right){
      res=backTrack(root.right,cur,res)
  }
  return res
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(sumNumbers(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

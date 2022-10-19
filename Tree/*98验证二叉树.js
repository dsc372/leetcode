const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const traversal=function(root,res){
    if(root===null)return
    traversal(root.left,res)
    res.push(root.val)
    traversal(root.right,res)
}
const isValidBST = function(root) {
    const res=new Array()
    traversal(root,res)
    for(let i=1;i<res.length;i++){
        if(res[i-1]>=res[i])return false//注意等于
    }
    return true
};

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(isValidBST(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

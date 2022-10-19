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
const getMinimumDifference = function(root) {
    const res=new Array()
    let min=Number.MAX_SAFE_INTEGER
    traversal(root,res)
    for(let i=1;i<res.length;i++){
        min=Math.min(min,Math.abs(res[i]-res[i-1]))
    }
    return min
};

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(getMinimumDifference(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

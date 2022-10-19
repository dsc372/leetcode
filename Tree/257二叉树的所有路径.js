const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const travelrsal=function(root,path,res){
    path.push(root.val)
    if(root.left===null&&root.right===null){
        let sPath=''
        for(let i=0;i<path.length-1;i++){
            sPath+=`${path[i]}->`
            console.log(sPath)
        }
        sPath+=path[path.length-1]
        res.push(sPath)
        return
    }
    if(root.left){
        travelrsal(root.left,path,res)
        path.pop()
    }
    if(root.right){
        travelrsal(root.right,path,res)
        path.pop()
    }
}
const binaryTreePaths = function(root) {
    const path=new Array()
    const res=new Array()
    if(root===null)return res
    travelrsal(root,path,res)
    return res
};

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(binaryTreePaths(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

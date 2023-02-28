const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const isSameTree = function(p, q) {
  if(p===null&&q===null)return true
  else if(p===null||q===null) return false
  else if(p.val!==q.val)return false
  else return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
}

const lines=new Array()
rl.on("line", function (line) {
  lines.push(line)
  if(lines.length===2){
    const root1 = MyTree.createTree(lines[0].split(" "))
    const root2 = MyTree.createTree(lines[1].split(" "))
    console.log(isSameTree(root1,root2))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

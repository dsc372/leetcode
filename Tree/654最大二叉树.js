const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
const constructMaximumBinaryTree = function (nums) {
    if(nums.length===0)return null
    let index=0,max=nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i]
            index=i
        }
    }
    const root=new TreeNode(max)
    root.left=constructMaximumBinaryTree(nums.slice(0,index))
    root.right=constructMaximumBinaryTree(nums.slice(index+1))
    return root
}

rl.on("line", function (line) {
  console.log(constructMaximumBinaryTree(line.split(" ")))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

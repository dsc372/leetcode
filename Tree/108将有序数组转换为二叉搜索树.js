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

const sortedArrayToBST = function(nums) {
  if(nums.length===0)return null
  const midIndex=Math.floor((nums.length-1)/2)
  return new TreeNode(nums[midIndex],sortedArrayToBST(nums.slice(0,midIndex)),sortedArrayToBST(nums.slice(midIndex+1)))
}

rl.on("line", function (line) {
  console.log(sortedArrayToBST(line.split(" ")))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})

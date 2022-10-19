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

const traversal = function (left, right, nums) {
  if (left > right) return null
  let mid = Math.floor((left + right) / 2)
  const root = new TreeNode(nums[mid])
  root.left = traversal(left, mid - 1, nums)
  root.right = traversal(mid + 1, right, nums)
  return root
}
const sortedArrayToBST = function (nums) {
  return traversal(0, nums.length - 1, nums)
}

rl.on("line", function (line) {
  console.log(sortedArrayToBST(line.split(" ")))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})

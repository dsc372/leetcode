const MyTree = require("./MyTree")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const traversal = function (root, arr) {
  if (root === null) return
  traversal(root.left, arr)
  arr.push(root.val)
  traversal(root.right, arr)
}
const findMode = function (root) {
  const arr = new Array()
  let res = new Array()
  let count = 1,
    maxCount = 1
  traversal(root, arr)
  res.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) count++
    else count = 1
    if (count === maxCount) res.push(arr[i])
    if (count > maxCount) {
      maxCount = count
      res = new Array()
      res.push(arr[i])
    }
  }
  return res
}

rl.on("line", function (line) {
  const root = MyTree.createTree(line.split(" "))
  console.log(findMode(root))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

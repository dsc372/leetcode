const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let res = new Array()
let path = new Array()
const backTrack = function (n, k, startIndex) {
  if (path.length === k) {
    res.push([...path])
    return
  }
  for (let i = startIndex; i <= n-(k-path.length); i++) {
    path.push(i)
    backTrack(n, k, i + 1)
    path.pop()
  }
}
const combine = function (n, k) {
  res = new Array() //leetcode多次调用需要
  backTrack(n, k, 1)
  return res
}

let lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    lines = lines.map(Number)
    console.log(combine(lines[0], lines[1]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit()
})

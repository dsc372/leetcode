//使用1-9，每个数字只能使用一次

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let res = new Array()
let path = new Array()
const backTrack = function (k, n, startIndex, sum) {
  if (sum > n) return//剪枝
  if (path.length === k&&sum === n) {//path.length>k直接return
    res.push([...path])
    return
  }
  for (let i = startIndex; i <= 9 - (k - path.length)+1; i++) {//剪枝
    path.push(i)
    sum += i
    backTrack(k, n, i + 1, sum)
    sum -= i
    path.pop()
  }
}
const combinationSum3 = function (k, n) {
  res = new Array()
  backTrack(k, n, 1, 0)
  return res
}

let lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    lines = lines.map(Number)
    console.log(combinationSum3(lines[0], lines[1]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit()
})

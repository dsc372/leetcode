const { findSourceMap } = require("module")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const reverseStr = function (s, k) {
  let arr = s.split("")
  for (let i = 0; i < s.length; i += 2 * k) {
    let left = i,
      right = Math.min(i + k, s.length) - 1
    while (left < right) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  return arr.join("")
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    console.log(reverseStr(lines[0], parseInt(lines[1])))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const arr = new Array(26).fill(0)
  const base = "a".charCodeAt(0)
  for (i of s) {
    arr[i.charCodeAt(0) - base]++
  }
  for (i of t) {
    if (!arr[i.charCodeAt(0) - base]) return false
    arr[i.charCodeAt(0) - base]--
  }
  return true
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    console.log(isAnagram(lines[0], lines[1]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const ary = new Array(26).fill(0)
  const base = "a".charCodeAt()
  for (i of s) {
    ary[i.charCodeAt() - base]++
  }
  for (i of t) {
    if (!ary[i.charCodeAt() - base]) return false
    ary[i.charCodeAt() - base]--
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

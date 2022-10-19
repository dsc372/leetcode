const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  console.log(g, s)
  let res = 0,
    index = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[index]) {
      res++
      index++
    }
  }
  return res
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    const g = lines[0].split(" ").map(Number)
    const s = lines[1].split(" ").map(Number)
    console.log(findContentChildren(g, s))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

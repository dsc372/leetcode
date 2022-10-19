const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const topKFrequent = function (nums, k) {
  const map = new Map()
  for (let i of nums) {
    map.set(i, (map.get(i) || 0) + 1)
  }
  const arr = [...map.entries()].sort((a, b) => b[1] - a[1])
  const res = new Array()
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }
  return res
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    console.log(
      topKFrequent(lines[0].split(" ").map(Number), parseInt(lines[1]))
    )
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

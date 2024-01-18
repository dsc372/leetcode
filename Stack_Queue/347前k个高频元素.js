const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const topKFrequent = function (nums, k) {
  const map=new Map()
  nums.forEach(i=>map.set(i,(map.get(i)||0)+1))
  return [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(i=>i[0])
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

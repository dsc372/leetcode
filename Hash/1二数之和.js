const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const twoSum = function (nums, target) {
  const map = new Map()
  for (i in nums) {
    if (map.has(target - nums[i])) return [i, map.get(target - nums[i])]
    else map.set(nums[i], i)
  }
  return []
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    lines[0] = lines[0].split(" ")
    for (i in lines[0]) {
      lines[0][i] = parseInt(lines[0][i])
    }
    lines[1] = parseInt(lines[1])
    console.log(twoSum(lines[0], lines[1]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

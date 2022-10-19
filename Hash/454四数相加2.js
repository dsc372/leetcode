const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map()
  let res = 0
  for (i of nums1) {
    for (j of nums2) {
      map.set(i + j, (map.get(i + j) || 0) + 1)
    }
  }
  for (i of nums3) {
    for (j of nums4) {
      if (map.has(-(i + j))) res += map.get(-(i + j))
    }
  }
  return res
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 4) {
    for (i in lines) {
      lines[i] = lines[i].split(" ")
      for (j in lines[i]) {
        lines[i][j] = parseInt(lines[i][j])
      }
    }
    console.log(fourSumCount(lines[0], lines[1], lines[2], lines[3]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

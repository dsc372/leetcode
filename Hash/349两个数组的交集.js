const { doesNotReject } = require("assert")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const intersection = function (nums1, nums2) {
  if (nums2.length > nums1.length) {
    const temp = nums1
    nums1 = nums2
    nums2 = temp
  }
  const nums_set = new Set(nums1)
  const res = new Set()
  for (i of nums2) {
    if (nums_set.has(i)) res.add(i)
  }
  return Array.from(res)
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line.split(" "))
  if (lines.length === 2) {
    console.log(intersection(lines[0], lines[1]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

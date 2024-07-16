const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  const res = [-1, -1]
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] >= target) right = mid
    else left = mid + 1
  }
  if (nums[left] === target) res[0] = left
  else return [-1, -1]
  ;(left = 0), (right = nums.length - 1)
  while (left < right) {
    let mid = Math.ceil((left + right) / 2)
    if (nums[mid] <= target) left = mid
    else right = mid - 1
  }
  res[1] = nums[right] === target ? right : -1
  return res
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    const ary = lines[0].split(" ")
    ary.forEach((item, index) => {
      ary[index] = parseInt(item)
    })
    console.log(searchRange(ary, parseInt(lines[1])))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

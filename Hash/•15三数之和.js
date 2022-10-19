const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const twoSumTarget = function (nums, start, target) {
  const res = new Array()
  if (nums[start >= target]) return res
  let left = start,
    right = nums.length - 1
  while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum === target) {
      res.push([nums[left], nums[right]])
      while (nums[left] === nums[left + 1]) left++
      while (nums[right] === nums[right - 1]) right--
      left++
      right--
    } else if (sum < target) {
      while (nums[left] === nums[left + 1]) left++
      left++
    } else {
      while (nums[right] === nums[right - 1]) right--
      right--
    }
  }
  return res
}
const nSumTarget = function (nums, n, start, target) {
  let res = new Array()
  if (n === 2) {
    res = twoSumTarget(nums, start, target)
  } else {
    for (let i = start; i < nums.length - 1; i++) {
      let subRes = nSumTarget(nums, n - 1, i + 1, target - nums[i])
      for (let j = 0; j < subRes.length; j++) {
        res.push([nums[i], ...subRes[j]])
      }
      while (nums[i] === nums[i + 1]) i++
    }
  }
  return res
}
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  return nSumTarget(nums, 3, 0, 0)
}

rl.on("line", function (line) {
  line = line.split(" ")
  for (i in line) {
    line[i] = parseInt(line[i])
  }
  console.log(threeSum(line))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

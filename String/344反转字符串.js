const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const reverseString = function (s) {//s是数组
  let left = 0,
    right = s.length - 1
  while (left < right) {
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
}

rl.on("line", function (line) {
  let arr = line.split("")
  reverseString(arr)
  console.log(arr)
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

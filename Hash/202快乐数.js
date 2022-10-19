const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const getSum = function (n) {
  let sum = 0
  while (n) {
    sum += Math.pow(n % 10, 2)
    n = Math.floor(n / 10)
  }
  return sum
}
const isHappy = function (n) {
  const set = new Set()
  while (1) {
    n = getSum(n)
    if (n === 1) return true
    else if (set.has(n)) return false
    else set.add(n)
  }
}

rl.on("line", function (line) {
  console.log(isHappy(parseInt(line)))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

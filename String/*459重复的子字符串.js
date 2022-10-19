const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, -1).includes(s)
}

rl.on("line", function (line) {
  console.log(repeatedSubstringPattern(line))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

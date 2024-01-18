const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
}
let res = new Array()
let path = new Array()
const backTrack = function (digits, index) {
  if (path.length === digits.length) {
    res.push(path.join(""))
    return
  }
  for (let i = 0; i < map[digits[index]].length; i++) {
    path.push(map[digits[index]][i])
    backTrack(digits, index + 1)
    path.pop()
  }
}
const letterCombinations = function (digits) {
  if (digits === "") return res
  backTrack(digits, 0)
  return res
}

rl.on("line", function (line) {
  console.log(letterCombinations(line.split(" ")))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})

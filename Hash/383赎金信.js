const { stdin } = require("process")
const readline = require("readline")
const { arrayBuffer } = require("stream/consumers")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const canConstruct = function (ransomNote, magazine) {
  const arr = new Array(26).fill(0)
  const baseCode = "a".charCodeAt()
  for (i of magazine) {
    arr[i.charCodeAt() - baseCode]++
  }
  for (i of ransomNote) {
    arr[i.charCodeAt() - baseCode]--
    if (arr[i.charCodeAt() - baseCode] < 0) return false
  }
  return true
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    console.log(canConstruct(lines[0], lines[1]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

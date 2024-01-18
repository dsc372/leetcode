const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const commonChars = function (words) {
  const res = new Array()
  const firstHash = new Array(26).fill(0)
  const otherHash = new Array(26).fill(0)
  const baseCode = "a".charCodeAt(0)

  for (let i of words[0]) {
    firstHash[i.charCodeAt(0) - baseCode]++
  }
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      otherHash[words[i][j].charCodeAt(0) - baseCode]++
    }
    for (let j = 0; j < 26; j++) {
      firstHash[j] = Math.min(firstHash[j], otherHash[j])
    }
    otherHash.fill(0)
  }
  for (let i = 0; i < 26; i++) {
    while (firstHash[i]-- > 0) res.push(String.fromCharCode(i + baseCode))
  }
  return res
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === parseInt(lines[0]) + 1) {
    lines.shift()
    console.log(commonChars(lines))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

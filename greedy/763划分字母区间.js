const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const partitionLabels = function (s) {
  const res = new Array()
  let tmpStart = 0,
    start = 0,
    tmpEnd = s.lastIndexOf(s[0])
  while (tmpEnd !== s.length - 1) {
    if (tmpStart === tmpEnd) {
      res.push(tmpEnd - start + 1)
      start = tmpStart + 1
      tmpStart++
      tmpEnd = s.lastIndexOf(s[start])
    } else {
      tmpStart++
      tmpEnd = Math.max(tmpEnd, s.lastIndexOf(s[tmpStart]))
    }
  }
  res.push(tmpEnd - start + 1)
  return res
}

rl.on("line", function (line) {
  console.log(partitionLabels(line))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})

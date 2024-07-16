const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const convert = function (s, numRows) {
  if (numRows === 1) return s
  let res = new Array()
  let skip = (numRows - 1) * 2
  for (i = 0; i < numRows; i++) {
    let index = i
    if (i === 0 || i === numRows - 1)
      while (index < s.length) {
        res.push(s[index])
        index += skip
      }
    else
      while (index < s.length) {
        res.push(s[index])
        let another_index = index + skip - 2 * i
        if (another_index < s.length) res.push(s[another_index])
        index += skip
      }
  }
  return res.join("")
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    console.log(convert(lines[0], parseInt(lines[1])))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

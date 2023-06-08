const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const getNext = function (s) {
  const res = new Array(s.length - 1)
  let j = 0
  res[0] = j
  for (let i = 1; i < s.length; i++) {
    while (j > 0 && s[j] !== s[i]) {
      j = res[j - 1]
    }
    if (s[j] === s[i]) {
      j++
    }
    res[i] = j
  }
  return res
}
const strStr = function (haystack, needle) {
  const next = getNext(needle)
  let j = 0
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (haystack[i] === needle[j]) j++
    if (j === needle.length) {
      return i - j + 1
    }
  }
  return -1
}

const lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    console.log(strStr(lines[0], lines[1]))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit(0)
})

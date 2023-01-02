const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let res = new Array()
let path = new Array()
const isPalindrome = function (s, start, end) {
  for (let left = start, right = end; left < right; left++, right--) {
    if (s[left ]!== s[right]) return false
  }
  return true
}
const backTrack = function (s, index) {
  if (index >= s.length) {
    res.push([...path])
    return
  }
  for (let i = index; i < s.length; i++) {
    if (isPalindrome(s, index, i)) {
        path.push(s.slice(index, i + 1))
    } else {
      continue
    }
    backTrack(s, i + 1)
    path.pop()
  }
}
const partition = function (s) {
  res = new Array()
  backTrack(s, 0)
  return res
}

rl.on("line", function (line) {
  console.log(partition(line))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})

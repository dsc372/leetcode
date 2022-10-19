const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const isValid = function (s) {
  const st = new Array()
  st.push(s[0])
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      st.push(s[i])
    } else if (
      (s[i] === ")" && st[st.length - 1] !== "(") ||
      (s[i] === "]" && st[st.length - 1] !== "[") ||
      (s[i] === "}" && st[st.length - 1] !== "{")
    ) {
      return false
    } else {
      st.pop()
    }
  }
  return st.length === 0
}

rl.on("line", function (line) {
  console.log(isValid(line))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})

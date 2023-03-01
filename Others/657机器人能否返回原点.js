const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const judgeCircle = function(moves) {
  let left=0,up=0
  for(i of moves){
      if(i==='L')left++
      else if(i==='R')left--
      else if(i==='U')up++
      else up--
  }
  return left===0&&up===0
}

rl.on("line", function (line) {
  console.log(judgeCircle(line))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})
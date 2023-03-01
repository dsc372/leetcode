const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const sortByBits = function(arr) {
  const bitCount=function(n){
      let count=0
      while(n){
          n&=(n-1)
          count++
      }
      return count
  }
  return arr.sort((a,b)=>bitCount(a)-bitCount(b)||a-b)
}

rl.on("line", function (line) {
  console.log(sortByBits(Number(line)))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const reverse = function(x) {
    const arr=x.toString().split('')
    let flag=false
    while(arr[arr.length-1]==='0')arr.pop()
    if(arr[0]==='-'){
        flag=true
        arr.shift()
    }
    arr.reverse()
    let res=flag?-Number(arr.join('')):Number(arr.join(''))
    if(res<-2147483648||res>2147483647)return 0
    else return res 
}

rl.on("line", function (line) {
  console.log(reverse(Number(line)))
  rl.close()
})
rl.on("close", function () {
  process.exit(0)
})
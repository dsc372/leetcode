const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const monotoneIncreasingDigits = function(n) {//可利用flag优化
    let s=n.toString().split('')
    for(let i=s.length-1;i>=1;i--){
        if(s[i]<s[i-1]){
            for(let j=i;j<s.length;j++){
                s[j]='9'
            }
            if(i===1&&s[i-1]==='1'){
                s.shift()
            }else{
                s[i-1]--
            }
        }
    }
    return parseInt(s.join(''))
};

rl.on("line", function (line) {
    console.log(monotoneIncreasingDigits(line))
    rl.close()
})
rl.on("close", function () {
    process.exit()
})
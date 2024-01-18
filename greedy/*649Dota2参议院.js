const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const predictPartyVictory = function(senateStr) {
    let R=true,D=true,flag=0
    let senate = senateStr.split('')
    while(R&&D){
        R=false
        D=false
        for(let i=0;i<senate.length;i++){
            if(senate[i]==='R'){
                if(flag<0)senate[i]='0'
                else R=true
                flag++
            }
            if(senate[i]==='D'){
                if(flag>0)senate[i]='0'
                else D=true
                flag--
            }
        }
    }
    return R?'Radiant':'Dire'
}

rl.on("line", function (line) {
    console.log(predictPartyVictory(line))
})
rl.on("close", function () {
    process.exit()
})
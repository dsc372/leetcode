const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const maxProfit = function(prices, fee) {
    let res=0,minPrice=prices[0]
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice=prices[i]
        }
        if(prices[i]>=minPrice&&prices[i]<=minPrice+fee){
            continue
        }
        if(prices[i]>minPrice+fee){
            res+=prices[i]-minPrice-fee
            minPrice=prices[i]-fee
        }
    }
    return res
};

const lines=new Array()
rl.on("line", function (line) {
    lines.push(line)
    if(lines.length===2){
        console.log(maxProfit(lines[0].split(' ').filter(Number),parseInt(lines[1])))
    }
})
rl.on("close", function () {
    process.exit()
})
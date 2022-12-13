const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const maxProfit = function(prices) {
    let low=Number.MAX_SAFE_INTEGER
    let res=0
    for(let i=0;i<prices.length;i++){
        low=Math.min(low,prices[i])
        res=Math.max(res,prices[i]-low)
    }
    return res
};

rl.on('line',function(line){
    console.log(maxProfit(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
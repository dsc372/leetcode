const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const maxProfit = function(prices) {
    let res=0
    for(let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1])res+=prices[i]-prices[i-1]
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
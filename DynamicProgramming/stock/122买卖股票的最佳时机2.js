const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const maxProfit = function(prices) {
    const dp=new Array(prices.length).fill(0)
    for(let i=1;i<prices.length;i++){
        if(prices[i-1]<prices[i]){
            dp[i]=dp[i-1]+prices[i]-prices[i-1]
        }else{
            dp[i]=dp[i-1]
        }
    }
    return dp[prices.length-1]
};

rl.on('line',function(line){
    console.log(maxProfit(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
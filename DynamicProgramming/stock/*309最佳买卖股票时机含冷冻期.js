const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const maxProfit = function(prices) {
    if(prices.length<2)return 0
    if(prices.length<3)return Math.max(0,prices[1]-prices[0])
    const dp=new Array(prices.length).fill(0).map(x=>new Array(4).fill(0))
    dp[0][0]=-prices[0]
    for(let i=1;i<prices.length;i++){
        dp[i][0]=Math.max(dp[i-1][0],Math.max(dp[i-1][1]-prices[i],dp[i-1][3]-prices[i]))
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][3])
        dp[i][2]=dp[i-1][0]+prices[i]
        dp[i][3]=dp[i-1][2]
    }
    return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3])
};

rl.on('line',function(line){
    console.log(maxProfit(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
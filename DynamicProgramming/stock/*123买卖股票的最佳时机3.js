const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const maxProfit = function(prices) {
    const dp=new Array(prices.length).fill(0).map(x=>new Array(5).fill(0))
    dp[0][1]=-prices[0]
    dp[0][3]=-prices[0]
    for(let i=1;i<prices.length;i++){
        dp[i][1]=Math.max(dp[i-1][0]-prices[i],dp[i-1][1])
        dp[i][2]=Math.max(dp[i-1][1]+prices[i],dp[i-1][2])
        dp[i][3]=Math.max(dp[i-1][2]-prices[i],dp[i-1][3])
        dp[i][4]=Math.max(dp[i-1][3]+prices[i],dp[i-1][4])
    }
    return dp[prices.length-1][4]
};

rl.on('line',function(line){
    console.log(maxProfit(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
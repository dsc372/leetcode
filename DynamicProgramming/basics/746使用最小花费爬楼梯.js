const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const minCostClimbingStairs = function(cost) {
    const dp=new Array()
    dp[0]=0
    dp[1]=0
    for(let i=2;i<=cost.length;i++){
        dp[i]=Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    return dp[cost.length]
}

rl.on('line',function(line){
    console.log(minCostClimbingStairs(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const climbStairs = function(n) {
    const dp=new Array()
    dp[0]=1
    dp[1]=1
    for(let i=2;i<=n;i++)dp[i]=dp[i-1]+dp[i-2]
    return dp[n]
}

rl.on('line',function(line){
    console.log(climbStairs(parseInt(line)))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
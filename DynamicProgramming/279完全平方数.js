const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const numSquares = function(n) {
    const dp=new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0]=0
    for(let i=1;i<=n;i++){
        for(let j=1;j<=Math.floor(Math.sqrt(i));j++){
            dp[i]=Math.min(dp[i],dp[i-j*j]+1)
        }
    }
    return dp[n]
}

rl.on('line',function(line){
    console.log(numSquares(parseInt(line)))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
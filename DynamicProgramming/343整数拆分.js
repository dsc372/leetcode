const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const integerBreak = function(n) {
    const dp=new Array(n+1).fill(0)
    dp[1]=1
    for(let i=2;i<=n;i++){
        for(let j=1;j<=i/2;j++){
            dp[i]=Math.max(dp[i],Math.max(dp[j],j)*Math.max(dp[i-j],i-j))
        }
    }
    return dp[n]
}

rl.on('line',function(line){
    console.log(integerBreak(parseInt(line)));
    rl.close()
})
rl.on('close',function(){
    process.exit()
})

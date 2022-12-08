const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const uniquePaths = function(m, n) {
    const dp=new Array(m).fill(new Array(n))
    for(let i=0;i<m;i++){
        dp[i][0]=1
    }
    for(let i=0;i<n;i++){
        dp[0][i]=1
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};

rl.on('line',function(line){
    console.log(uniquePaths(parseInt(line.split(' ')[0]),line.split(' ')[1]));
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
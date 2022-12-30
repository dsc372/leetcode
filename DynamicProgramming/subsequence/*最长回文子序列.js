const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const longestPalindromeSubseq = function(s) {
    const dp=new Array(s.length).fill(0).map(item=>new Array(s.length).fill(0))
    for(let i=0;i<s.length;i++)dp[i][i]=1
    for(let i=s.length-1;i>=0;i--){
        for(let j=i+1;j<s.length;j++){
            if(s[i]===s[j])dp[i][j]=dp[i+1][j-1]+2
            else dp[i][j]=Math.max(dp[i+1][j],dp[i][j-1])
        }
    }
    return dp[0][s.length-1]
}

rl.on('line',function(line){
  console.log(longestPalindromeSubseq(line))
  rl.close()  
})
rl.on('close',function(){
    process.exit()
})
const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const longestPalindromeSubseq = function(s) {
    const dp=new Array(s.length).fill(0).map(item=>new Array(s.length).fill(0))
    let res=1
    for(let i=0;i<s.length;i++){
        for(let j=i;j>=0;j--){
            if(s[i]===s[j]){
                if(i-j>1)dp[i][j]=dp[i-1][j+1]+2
                else dp[i][j]=i-j+1
            }
            else dp[i][j]=Math.max(dp[i-1][j],dp[i][j+1])
            res=Math.max(res,dp[i][j])
        }
    }
    return res
}

rl.on('line',function(line){
  console.log(longestPalindromeSubseq(line))
  rl.close()  
})
rl.on('close',function(){
    process.exit()
})
const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const longestCommonSubsequence = function(text1, text2) {
    const dp=new Array(text1.length+1).fill(0).map(item=>new Array(text2.length+1).fill(0))
    for(let i=1;i<=text1.length;i++){
        for(let j=1;j<=text2.length;j++){
            if(text1[i-1]===text2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1
            }else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[text1.length][text2.length]
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(longestCommonSubsequence(lines[0],lines[1]))
        rl.close()
    } 
})
rl.on('close',function(){
    process.exit()
})
const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const minDistance = function(word1, word2) {
    const dp=new Array(word1.length+1).fill(0).map(item=>new Array(word2.length+1).fill(0))
    for(let i=0;i<=word1.length;i++)dp[i][0]=i
    for(let i=0;i<=word2.length;i++)dp[0][i]=i
    for(let i=1;i<=word1.length;i++){
        for(let j=1;j<=word2.length;j++){
            if(word1[i-1]===word2[j-1]){
                dp[i][j]=dp[i-1][j-1]
            }else{
                dp[i][j]=Math.min(Math.min(dp[i-1][j],dp[i][j-1]),dp[i-1][j-1])+1
            }
        }
    }
    return dp[word1.length][word2.length]
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(minDistance(lines[0],lines[1]))
        rl.close()
    } 
})
rl.on('close',function(){
    process.exit()
})
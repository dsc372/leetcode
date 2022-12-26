const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const numDistinct = function(s, t) {
    const dp=new Array(s.length+1).fill(0).map(item=>new Array(t.length+1).fill(0))
    for(let i=0;i<=s.length;i++)dp[i][0]=1
    for(let i=1;i<=s.length;i++){
        for(let j=1;j<=t.length;j++){
            if(s[i-1]===t[j-1]){
                dp[i][j]=dp[i-1][j-1]+dp[i-1][j]
            }else{
                dp[i][j]=dp[i-1][j]
            }
        }
    }
    return dp[s.length][t.length]
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(numDistinct(lines[0],lines[1]))
        rl.close()
    } 
})
rl.on('close',function(){
    process.exit()
})
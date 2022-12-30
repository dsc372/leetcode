const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const countSubstrings = function(s) {
    const dp=new Array(s.length).fill(false).map(item=>new Array(s.length).fill(false))
    let res=0
    for(let i=0;i<s.length;i++){
        for(let j=0;j<=i;j++){
            if(s[i]===s[j]){
                if(i-1>j){
                    if(dp[i-1][j+1]){
                       dp[i][j]=true
                       res++ 
                    }
                }else{
                    dp[i][j]=true
                    res++
                }
            }
        }
    }
    return res
}

rl.on('line',function(line){
  console.log(countSubstrings(line))
  rl.close()  
})
rl.on('close',function(){
    process.exit()
})
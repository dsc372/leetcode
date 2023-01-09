const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const longestPalindrome = function(s) {
    const dp=new Array(s.length).fill(false).map(item=>new Array(s.length).fill(false))
    let res=new Array(2).fill(0)
    for(let i=0;i<s.length;i++){
        for(let j=0;j<=i;j++){
            if(s[i]===s[j]){
                if(i-1>j){
                    if(dp[i-1][j+1]){
                       dp[i][j]=true
                       if(res[1]-res[0]<i-j){
                           res[0]=j
                           res[1]=i
                       } 
                    }
                }else{
                    dp[i][j]=true
                       if(res[1]-res[0]<i-j){
                           res[0]=j
                           res[1]=i
                       } 
                }
            }
        }
    }
    return s.substring(res[0],res[1]+1)
}

rl.on('line',function(line){
  console.log(longestPalindrome(line))
  rl.close()  
})
rl.on('close',function(){
    process.exit()
})
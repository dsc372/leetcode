var wordBreak = function(s, wordDict) {
    const dp=new Array(s.length+1).fill(false)
    dp[0]=true
    for(let i=1;i<=s.length;i++){
        for(let j=0;j<i;j++){
            let str=s.substr(j,i-j)
            if(wordDict.indexOf(str)!==-1&&dp[j])dp[i]=true
        }
    }
    return dp[s.length]
}
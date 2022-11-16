const findMaxForm = function(strs, m, n) {
    const dp=new Array(m+1)
    for(let i=0;i<=m;i++){
        dp[i]=new Array(n+1).fill(0)
    }
    for(let str of strs){
        let zero=0,one=0
        for(s of str){
            s==='0'?zero++:one++
        }
        for(let i=m;i>=zero;i--){
            for(let j=n;j>=one;j--){
                dp[i][j]=Math.max(dp[i-zero][j-one]+1,dp[i][j])
            }
        }
    }
    return dp[m][n]
};
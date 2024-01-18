const findMaxForm = function(strs, m, n) {
    const dp=new Array(m+1).fill(0).map(item=>new Array(n+1).fill(0))
    strs.forEach(str=>{
        let zero=0,one=0
        for(let s of str)
            s==='0'?zero++:one++
        for(let i=m;i>=zero;i--)
            for(let j=n;j>=one;j--)
                dp[i][j]=Math.max(dp[i-zero][j-one]+1,dp[i][j])

    })
    return dp[m][n]
};
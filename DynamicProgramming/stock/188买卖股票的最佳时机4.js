const maxProfit = function(k, prices) {
    const dp=new Array(prices.length).fill(0).map(x=>new Array(2*k+1).fill(0))
    for(let i=1;i<=k;i++){
        dp[0][2*i-1]=-prices[0]
    }
    for(let i=1;i<prices.length;i++){
        dp[i][0]=dp[i-1][0]
        for(let j=1;j<dp[i].length;j++){
            if(j%2!==0){
                dp[i][j]=Math.max(dp[i-1][j-1]-prices[i],dp[i-1][j])
            }else{
                dp[i][j]=Math.max(dp[i-1][j-1]+prices[i],dp[i-1][j])
            }
        }
    }
    return dp[prices.length-1][2*k]
};
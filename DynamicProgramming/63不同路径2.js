const uniquePathsWithObstacles = function(obstacleGrid) {
    const row=obstacleGrid.length
    const col=obstacleGrid[0].length
    const dp=new Array(row)
    for(let i=0;i<row;i++){
        dp[i]=new Array(col).fill(0)
    }
    for(let i=0;i<row;i++){
        if(obstacleGrid[i][0]!==1){
            dp[i][0]=1
        }else{
            break
        }
    }
    for(let i=0;i<col;i++){
        if(obstacleGrid[0][i]!==1){
            dp[0][i]=1
        }else{
            break
        }
    }
    for(let i=1;i<row;i++){
        for(let j=1;j<col;j++){
            if(obstacleGrid[i][j]!==1){
                dp[i][j]=dp[i-1][j]+dp[i][j-1]
            }else{
                continue
            }
        }
    }
    return dp[row-1][col-1]
};
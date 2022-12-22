const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const maxUncrossedLines = function(nums1, nums2) {
    const dp= new Array(nums1.length+1).fill(0).map(item=>new Array(nums2.length+1).fill(0))
    for(let i=1;i<=nums1.length;i++){
        for(let j=1;j<=nums2.length;j++){
            if(nums1[i-1]===nums2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1
            }else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[nums1.length][nums2.length]
};

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(maxUncrossedLines(lines[0],lines[1]))
        rl.close()
    } 
})
rl.on('close',function(){
    process.exit()
})
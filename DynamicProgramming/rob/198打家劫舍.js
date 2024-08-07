const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const rob = function(nums) {
    if(nums.length===1)return nums[0]
    const dp=new Array(nums.length-1).fill(0)
    dp[0]=nums[0]
    dp[1]=Math.max(dp[0],nums[1])
    for(let i=2;i<nums.length;i++){
        dp[i]=Math.max(dp[i-2]+nums[i],dp[i-1])
    }
    return dp[nums.length-1]
}

rl.on('line',function(line){
    console.log(rob(line.split(' ').map(Number)))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
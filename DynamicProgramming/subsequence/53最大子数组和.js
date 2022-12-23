const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const maxSubArray = function(nums) {
    const dp=new Array(nums.length)
    let res=nums[0]
    dp[0]=Math.max(nums[0],0)
    for(let i=1;i<nums.length;i++){
        if(dp[i-1]+nums[i]>res)res=dp[i-1]+nums[i]
        dp[i]=Math.max(0,dp[i-1]+nums[i])
    }
    return res
}

rl.on('line',function(line){
  console.log(maxSubArray(line.split(' ').map(Number)))
  rl.close()  
})
rl.on('close',function(){
    process.exit()
})
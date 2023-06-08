const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const canPartition = function(nums) {
    let sum=nums.reduce((start,current)=>{
        return start+current
    },0)
    if(sum%2!==0)return false
    let target=sum/2
    const dp=new Array(target+1).fill(0)
    for(let i=0;i<nums.length;i++){
        for(let j=target;j>=nums[i];j--){
            dp[j]=Math.max(dp[j],dp[j-nums[i]]+nums[i])
        }
    }
    return dp[target]===target
}

rl.on('line',function(line){
    console.log(canPartition(line.split(' ').map(Number)))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
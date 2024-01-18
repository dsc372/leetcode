const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const maxSubArray = function(nums) {
    const dp=new Array(nums.length).fill(0)
    let max=nums[0]
    dp[0]=Math.max(0,nums[0])
    for(let i=1;i<nums.length;i++){
        const res=dp[i-1]+nums[i]
        dp[i]=Math.max(res,0)
        max=Math.max(max,res)
    }
    return max
}

rl.on('line',function(line){
  console.log(maxSubArray(line.split(' ').map(Number)))
  rl.close()  
})
rl.on('close',function(){
    process.exit()
})
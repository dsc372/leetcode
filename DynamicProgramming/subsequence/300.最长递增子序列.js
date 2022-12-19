const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const lengthOfLIS = function(nums) {
    let res=1
    const dp=new Array(nums.length).fill(1)
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j])dp[i]=Math.max(dp[i],dp[j]+1)
            if(res<dp[i])res=dp[i]
        }
    }
    return res
}

rl.on('line',function(line){
  console.log(lengthOfLIS(line.split(' ').map(Number)))
  rl.close()  
})
rl.on('close',function(){
    process.exit()
})
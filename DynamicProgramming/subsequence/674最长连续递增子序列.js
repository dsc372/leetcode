const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const findLengthOfLCIS = function(nums) {
    const dp=new Array(nums.length).fill(1)
    let res=1
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            dp[i]=dp[i-1]+1
            if(dp[i]>res)res=dp[i]
        }
    }
    return res
}

rl.on('line',function(line){
  console.log(findLengthOfLCIS(line.split(' ').map(Number)))
  rl.close()  
})
rl.on('close',function(){
    process.exit()
})
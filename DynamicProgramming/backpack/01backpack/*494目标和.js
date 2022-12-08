const findTargetSumWays = function(nums, target) {
    let sum =nums.reduce((start,current)=>{
        return start+=current
    })
    if((Math.abs(target)>Math.abs(sum))||((target+sum)%2===1))return 0
    const bagSize=(target+sum)/2
    const dp=new Array(bagSize+1).fill(0)
    dp[0]=1
    for(let i=0;i<nums.length;i++){
        for(let j=bagSize;j>=nums[i];j--){
            dp[j]+=dp[j-nums[i]]
        }
    }
    return dp[bagSize]
};
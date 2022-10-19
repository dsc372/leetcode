const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const wiggleMaxLength = function(nums) {
    if(nums.length<=1)return nums.length
    let pre=0,cur=0,res=1
    for(let i=0;i<nums.length-1;i++){
        cur=nums[i+1]-nums[i]
        if((cur>0&&pre<=0)||(cur<0&&pre>=0)){
            pre=cur
            res++
        }
    }
    return res
};

rl.on('line',function(line){
    console.log(wiggleMaxLength(line.split(' ').map(Number)))
    rl.close()
})
rl.on("close", function () {
    process.exit(0)
  })
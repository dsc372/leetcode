const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const canJump = function(nums) {
    let cover=0
    for(let i=0;i<=cover;i++){
        cover=Math.max(cover,nums[i]+i)
        if(cover>=nums.length-1)return true
    }
    return false
};

rl.on('line',function(line){
    console.log(canJump(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
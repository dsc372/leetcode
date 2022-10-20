const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const jump = function(nums) {
    let cover=0,sum=0,max=0
    for(let i=0;i<=cover;i++){
        if(cover>=nums.length-1)return sum
        max=Math.max(max,nums[i]+i)
        if(i===cover){
            sum+=1
            cover=max
            max=0
        }
    }
};

rl.on('line',function(line){
    console.log(jump(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
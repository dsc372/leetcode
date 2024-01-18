const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const pivotIndex = function(nums) {
    let leftSum=0
    let sum=nums.reduce((a,b)=>a+b)
    for(let i=0;i<nums.length;i++){
        if(leftSum===((sum-nums[i])/2))return i
        else leftSum+=nums[i]
    }
    return -1

}

rl.on('line', function (line) {
    console.log(pivotIndex(line.split(' ').map(Number)))
    rl.close()
})
rl.on('close', function () {
    process.exit(0)
})
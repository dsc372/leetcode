const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const moveZeroes = function(nums) {
    let index=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[index++]=nums[i]
        }
    }
    while(index<nums.length){
        nums[index++]=0
    }
}

rl.on('line', function (line) {
    let arr=line.split(' ').map(Number)
    moveZeroes(arr)
    console.log(arr)
    rl.close()
})
rl.on('close', function () {
    process.exit(0)
})
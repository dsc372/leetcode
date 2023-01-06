const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const smallerNumbersThanCurrent = function(nums) {
    const arr=[...nums].sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        nums[i]=arr.indexOf(nums[i])
    }
    return nums
}

rl.on('line', function (line) {
    console.log(smallerNumbersThanCurrent(line.split(' ').map(Number)))
    rl.close()
})
rl.on('close', function () {
    process.exit(0)
})
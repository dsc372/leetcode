const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const sortArrayByParityII = function(nums) {
    let oddIndex = 1
    for(let i = 0; i < nums.length; i += 2){
        if(nums[i] % 2 === 1){
            while(nums[oddIndex] % 2 !== 0) oddIndex += 2
            let tmp=nums[i]
            nums[i]=nums[oddIndex]
            nums[oddIndex]=tmp
        }
    }
    return nums
};

rl.on('line', function (line) {
    console.log(sortArrayByParityII(line.split(' ').map(Number)))
    rl.close()
})
rl.on('close', function () {
    process.exit(0)
})
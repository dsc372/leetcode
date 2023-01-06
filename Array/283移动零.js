const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const moveZeroes = function(nums) {
    let i=0,end=nums.length
    while(i<end){
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0)
            end--
        }else{
            i++
        }
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
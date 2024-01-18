const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function rotate(nums, k) {
    k%=nums.length
    reverse(nums,0,nums.length-1)
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)
};

function reverse(nums,start,end){
    while(start<end){
        let temp=nums[start]
        nums[start]=nums[end]
        nums[end]=temp
        start++
        end--
    }
}

const lines=new Array()
rl.on('line', function (line) {
    lines.push(line)
    if(lines.length===2){
        const arr=lines[0].split(' ').map(Number)
        rotate(arr,Number(lines[1]))
        console.log(arr)
        rl.close()
    }
})
rl.on('close', function () {
    process.exit(0)
})
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const sortedSquares = function (nums) {
    const res=new Array(nums.length-1).fill(0)
    let left=0,right=nums.length-1,index=nums.length-1
    while(left<=right){
        if(Math.abs(nums[left])<=Math.abs(nums[right])){
            res[index--]=nums[right--]**2
        }
        else 
            res[index--]=nums[left++]**2
    }
    return res
};
rl.on('line', function (line) {
    const ary = line.split(' ')
    ary.forEach((item, index) => {
        ary[index] = parseInt(item)
    })
    console.log(sortedSquares(ary))
    rl.close()
})
rl.on('close', function () {
    process.exit(0)
})
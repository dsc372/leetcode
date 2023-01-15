const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
})
const searchInsert = function(nums, target) {
    let left=0,right=nums.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(target>nums[mid])left=mid+1
        else if(target<nums[mid])right=mid-1
        else return mid
    }
    return right+1
}

const lines = new Array()
rl.on('line', function (line) {
    lines.push(line)
    if (lines.length === 2) {
        const ary = lines[0].split(' ')
        ary.forEach((item, index) => {
            ary[index] = parseInt(item)
        })
        console.log(searchInsert(ary, parseInt(lines[1])))
        rl.close()
    }
})
rl.on('close', function () {
    process.exit(0)
})
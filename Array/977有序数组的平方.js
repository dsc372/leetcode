const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const sortedSquares = function (nums) {
    const res = new Array()
    let slow = 0,
        fast = nums.length - 1
    while (slow <= fast) {
        if (Math.abs(nums[slow]) < Math.abs(nums[fast])) {
            res.unshift(Math.pow(nums[fast--], 2))
        } else {
            res.unshift(Math.pow(nums[slow++], 2))
        }
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
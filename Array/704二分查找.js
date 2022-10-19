const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
})
const search = function (nums, target) {
    let left = 0
    let right = nums.length
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] > target) {
            right = mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
};
const lines = new Array()
rl.on('line', function (line) {
    lines.push(line)
    if (lines.length === 2) {
        const ary = lines[0].split(' ')
        ary.forEach((item, index) => {
            ary[index] = parseInt(item)
        })
        console.log(search(ary, parseInt(lines[1])))
        rl.close()
    }
})
rl.on('close', function () {
    process.exit(0)
})
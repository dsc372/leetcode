const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const removeElement = function (nums, val) {
    let slow = 0,
        fast = 0
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow++] = nums[fast]
        }
        fast++
    }
    return slow
};
const lines = new Array()
rl.on('line', function (line) {
    lines.push(line)
    if (lines.length === 2) {
        const ary = lines[0].split(' ')
        ary.forEach((item, index) => {
            ary[index] = parseInt(item)
        })
        console.log(removeElement(ary, parseInt(lines[1])))
        rl.close()
    }
})
rl.on('close', function () {
    process.exit(0)
})
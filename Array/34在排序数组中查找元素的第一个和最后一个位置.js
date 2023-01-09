const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const searchRange = function(nums, target) {
    return [nums.indexOf(target),nums.lastIndexOf(target)]
}

const lines = new Array()
rl.on('line', function (line) {
    lines.push(line)
    if (lines.length === 2) {
        const ary = lines[0].split(' ')
        ary.forEach((item, index) => {
            ary[index] = parseInt(item)
        })
        console.log(searchRange(ary, parseInt(lines[1])))
        rl.close()
    }
})
rl.on('close', function () {
    process.exit(0)
})
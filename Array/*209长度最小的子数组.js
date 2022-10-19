const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const minSubArrayLen = function (target, nums) {
    let val = 0,
        left = 0,
        _min = Number.MAX_SAFE_INTEGER
    for (let right = 0; right < nums.length; right++) {
        val += nums[right]
        while (val >= target) {
            _min = Math.min(_min, right - left + 1)
            val -= nums[left++]
        }
    }
    return _min === Number.MAX_SAFE_INTEGER ? 0 : _min
}
const lines = new Array()
rl.on('line', function (line) {
    lines.push(line)
    if (lines.length === 2) {
        let ary = lines[0].split(' ');
        ary.forEach((item, index) => {
            ary[index] = parseInt(item)
        })
        console.log(minSubArrayLen(lines[1], ary))
        rl.close()
    }
})
rl.on('close', function () {
    process.exit(0)
})
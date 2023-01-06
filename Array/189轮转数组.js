const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const rotate = function(nums, k) {
    while(k--){
        nums.unshift(nums.pop())
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
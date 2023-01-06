const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const validMountainArray = function(arr) {
    if(arr.length<=2)return false
    let left=0,right=arr.length-1
    while(arr[left]<arr[left+1]){
       if(++left===arr.length-1)return false
    }
    while(arr[right]<arr[right-1]){
        if(--right===0)return false
    }
    return left>=right
}

rl.on('line', function (line) {
    console.log(validMountainArray(line.split(' ').map(Number)))
    rl.close()
})
rl.on('close', function () {
    process.exit(0)
})
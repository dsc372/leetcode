const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const uniqueOccurrences = function(arr) {
    const count=new Array(2001).fill(0)
    const judge=new Array(1001).fill(false)
    for(i of arr){
        count[i+1000]++
    }
    for(i of count){
        if(i!==0){
            if(judge[i]===true)return false
            else judge[i]=true
        }
    }
    return true
}

rl.on('line', function (line) {
    console.log(uniqueOccurrences(line.split(' ').map(Number)))
    rl.close()
})
rl.on('close', function () {
    process.exit(0)
})
const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const balancedStringSplit = function(s) {
    let sum=0,left=0
    for(let i of s){
        left+=i==='L'?1:-1
        if(left===0)
            sum++
    }
    return sum
}

rl.on('line',function(line){
    console.log(balancedStringSplit(line))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})
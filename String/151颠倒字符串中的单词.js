const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const reverseWords = function(s) {
    return s.trim().split(' ').filter(item=>item).reverse().join(' ')
};

rl.on('line',function(line){
    console.log(reverseWords(line))
    rl.close()
})
rl.on('close',function(){
    process.exit(0)
})
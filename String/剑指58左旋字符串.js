const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const reverseLeftWords = function(s, n) {
    return s.slice(n,s.length)+s.slice(0,n)
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(reverseLeftWords(lines[0],parseInt(lines[1])))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit(0)
})
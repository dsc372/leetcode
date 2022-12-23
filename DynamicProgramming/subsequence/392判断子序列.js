const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const isSubsequence = function(s, t) {
    let j=0
    for(let i=0;i<t.length;i++){
        if(t[i]===s[j])j++
    }
    return j===s.length
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(isSubsequence(lines[0],lines[1]))
        rl.close()
    } 
})
rl.on('close',function(){
    process.exit()
})
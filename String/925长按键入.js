const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const isLongPressedName = function(name, typed) {
    if(name[0]!==typed[0])return false
    let n=1,t=1
    while(n<name.length&&t<typed.length){
        if(name[n]===typed[t]){
            n++
            t++
        }else if(typed[t]===typed[t-1]){
            t++
        }else{
            return false
        }
    }
    if(n<name.length)return false
    while(t<typed.length){
        if(typed[t]===typed[t-1])t++
        else return false
    }
    return true
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log
        (isLongPressedName(lines[0],lines[1]))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit()
})
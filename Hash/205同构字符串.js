const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const isIsomorphic = function(s, t) {
    if(s.length!==t.length)return false
    const hashA=new Map()
    const hashB=new Map()
    for(let i=0;i<s.length;i++){
        if(!hashA.has(s[i])){
           if(!hashB.has(t[i])){
               hashA.set(s[i],t[i])
               hashB.set(t[i],s[i])
           }else{
               return false
           }
        }else if(hashA.get(s[i])!==t[i])
            return false
    }
    return true
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(isIsomorphic(lines[0],lines[1]))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit()
})
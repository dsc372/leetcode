const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const backspaceCompare = function(s, t) {
    let sl=s.length-1,tl=t.length-1,sn=0,tn=0
    while(1){
        while(sl>=0){
            if(s[sl]==='#'){
                sn++
            }else{
                if(sn>0)sn--
                else break
            }
            sl--
        }
        while(tl>=0){
            if(t[tl]==='#'){
                tn++
            }else{
                if(tn>0)tn--
                else break
            }
            tl--
        }
        if(sl<0||tl<0) break
        if(s[sl]!==t[tl])return false
        sl--
        tl--
    }
    console.log(1)
    return tl===-1&&sl===-1
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(backspaceCompare(lines[0],lines[1]))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit()
})
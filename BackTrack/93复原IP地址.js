const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let res=new Array()
let path=new Array()
const backTrack=function(s,index){
    if(index>=s.length&&path.length===4){
        res.push(path.join('.'))
        return
    }
    for(let i=index;i<s.length;i++){
        let num=parseInt(s.slice(index,i+1))
        if((s[index]==='0'&&i!==index)||(num<0||num>255))continue
        path.push(num.toString())
        backTrack(s,i+1)
        path.pop()
    }
}
const restoreIpAddresses = function(s) {
    res=new Array()
    backTrack(s,0)
    return res
}

rl.on('line',function(line){
    console.log(restoreIpAddresses(line))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})